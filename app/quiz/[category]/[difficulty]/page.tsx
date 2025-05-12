// app/quiz/[category]/[difficulty]/page.tsx
import { getRandomQuestions } from '@/services/quizService'
import { QuizClientPage } from './client'

export default async function QuizPage({
    params,
}: {
    params: Promise<{ category: string; difficulty: string }>
}) {
    const {
        category,
        // TODO: Uncomment when difficulty is implemented
        //    ,difficulty
    } = await params
    const questions = await getRandomQuestions(
        category
        // TODO: Uncomment when difficulty is implemented
        // params.difficulty
    )
    if (!questions || questions.length === 0) {
        return <div>No questions available. Please try again later.</div>
    }
    return <QuizClientPage questions={questions} />
}
