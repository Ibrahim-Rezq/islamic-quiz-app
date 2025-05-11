// app/quiz/[category]/[difficulty]/page.tsx
import { getRandomQuestions } from '@/services/quizService'
import { QuizClientPage } from './client'

export default async function QuizPage({
    params,
}: {
    params: { category: string; difficulty: string }
}) {
    const questions = await getRandomQuestions(
        params.category,
        params.difficulty
    )
    if (!questions || questions.length === 0) {
        return <div>No questions available. Please try again later.</div>
    }
    return <QuizClientPage questions={questions} />
}
