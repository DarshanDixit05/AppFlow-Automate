import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'zap-outbox-worker',
    brokers: ['localhost:9092']
})

const TOPIC = 'zap-events'

const consumer = kafka.consumer({ groupId: 'zap-execute' })

async function main() {
    await consumer.connect()
    await consumer.subscribe({ topic: TOPIC })

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
            
            await new Promise((resolve) => setTimeout(resolve, 5000))
            await consumer.commitOffsets([
                { topic: TOPIC, partition: partition, offset: (parseInt(message.offset) + 1).toString() }
            ])
            console.log("done");
            
        },

    })
}

main()