import { PrismaClient, Tone } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const createMusics = () => ({
    artist: faker.music.artist(),
    createdAt: new Date(),
    date: faker.date.recent(),
    ministryId: 1,
    name: faker.music.songName(),
    singerId: 1,
    userId: 1,
    tone: Tone.A,
  })

  const musicsArray = Array.from({ length: 25 }, () => createMusics())

  await prisma.music.createMany({
    data: musicsArray,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
