// /services/quizService.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRandomQuestions(
    category: string,
    // TODO: Uncomment when difficulty is implemented
    // difficulty: string,
    count = 10
) {
    const questions = await prisma.question.findMany({
        where: {
            category: {
                name: category,
            },
            // TODO: Uncomment when difficulty is implemented

            // difficulty: difficulty.toUpperCase() as Difficulty,
        },
    })

    const shuffled = questions.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count).map((q) => ({
        ...q,
        options: q.options,
    }))
}
