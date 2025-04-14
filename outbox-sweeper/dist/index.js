"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./generated/prisma/client");
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'zap-outbox-sweeper',
    brokers: ['localhost:9092']
});
const prisma = new client_1.PrismaClient();
const producer = kafka.producer();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (1) {
            const zapOutboxRuns = yield prisma.zapRunOutbox.findMany({
                where: {},
                take: 10,
            });
            // push the zap outbox runs to kafka queue
            yield producer.connect();
            yield producer.send({
                topic: 'zap-events',
                messages: zapOutboxRuns.map((run) => ({
                    value: run.zapRunId,
                }))
            });
            // await new Promise((resolve) => setTimeout(resolve, 3000))
            //delete outbox zap runs after pusing into queue
            yield prisma.zapRunOutbox.deleteMany({
                where: {
                    id: {
                        in: zapOutboxRuns.map((run) => run.id)
                    }
                }
            });
        }
    });
}
main();
