import { PrismaClient } from "./generated/prisma/client"
import { Kafka } from "kafkajs"

const kafka = new Kafka({
    clientId: 'zap-outbox-sweeper',
    brokers: ['localhost:9092']
  })

const prisma = new PrismaClient()
const producer = kafka.producer()

async function main() {
    while(1){
        const zapOutboxRuns = await prisma.zapRunOutbox.findMany({
            where:{},
            take: 10,
        })

        // push the zap outbox runs to kafka queue
        await producer.connect()
        await producer.send({
          topic: 'zap-events',
          messages: zapOutboxRuns.map((run) => ({
            value: run.zapRunId,
          }))
        })
        // await new Promise((resolve) => setTimeout(resolve, 3000))

        //delete outbox zap runs after pusing into queue
        await prisma.zapRunOutbox.deleteMany({
            where:{
                id:{
                    in: zapOutboxRuns.map((run) => run.id)
                }
            }
        })
    }
}

main()