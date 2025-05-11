// /hooks/useQuiz.ts
import { Question } from '@prisma/client'
import { create } from 'zustand'

type QuizState = {
    currentQuestionIndex: number
    selectedAnswers: Record<string, string>
    questions: Question[]
    score: number
    startQuiz: (questions: Question[]) => void
    answerQuestion: (
        questionId: string,
        answer: string,
        isCorrect: boolean
    ) => void
    nextQuestion: () => void
    reset: () => void
}

export const useQuiz = create<QuizState>((set) => ({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    questions: [],
    score: 0,
    startQuiz: (questions) =>
        set({
            questions,
            currentQuestionIndex: 0,
            score: 0,
            selectedAnswers: {},
        }),
    answerQuestion: (id, answer, isCorrect) =>
        set((state) => {
            console.log('Answering question:', id, answer, isCorrect)
            return {
                selectedAnswers: { ...state.selectedAnswers, [id]: answer },
                score: state.score + (isCorrect ? 1 : 0),
            }
        }),
    nextQuestion: () =>
        set((state) => {
            console.log(
                'Moving to next question:',
                state.currentQuestionIndex + 1
            )
            return {
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        }),
    reset: () =>
        set({
            currentQuestionIndex: 0,
            selectedAnswers: {},
            questions: [],
            score: 0,
        }),
}))
