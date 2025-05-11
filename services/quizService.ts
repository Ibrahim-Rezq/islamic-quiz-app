// /services/quizService.ts
import { Difficulty, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRandomQuestions(
    category: string,
    difficulty: string,
    count = 10
) {
    const questions = await prisma.question.findMany({
        where: {
            category: {
                name: category,
            },
            difficulty: difficulty.toUpperCase() as Difficulty,
        },
    })

    const shuffled = questions.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count).map((q) => ({
        ...q,
        options: q.options ? JSON.parse(q.options as string) : null,
    }))
}
