// app/quiz/[category]/[difficulty]/client.tsx
'use client'

import { useQuiz } from '@/hooks/useQuiz'
import { Timer, QuestionCard } from '@/components'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Question } from '@prisma/client'

export function QuizClientPage({ questions }: { questions: Question[] }) {
    const router = useRouter()
    const {
        currentQuestionIndex,
        selectedAnswers,
        startQuiz,
        answerQuestion,
        nextQuestion,
        questions: stateQuestions,
    } = useQuiz()

    const current = stateQuestions[currentQuestionIndex]

    useEffect(() => {
        startQuiz(questions)
    }, [startQuiz, questions])

    const handleAnswer = (answer: string) => {
        const isCorrect = answer === current.correct
        answerQuestion(current.id, answer, isCorrect)
        setTimeout(() => {
            if (currentQuestionIndex + 1 === stateQuestions.length) {
                router.push('/results')
            } else {
                nextQuestion()
            }
        }, 300)
    }

    if (!current) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex justify-center items-center'>
                <div className='text-indigo-300 text-xl font-semibold'>
                    Loading quiz...
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex flex-col justify-center items-center p-4'>
            <div className='w-full max-w-xl mx-auto'>
                <div className='flex justify-between items-center mb-6 text-indigo-300 font-medium'>
                    <div className='flex items-center'>
                        <span className='mr-2'>📋</span>
                        <span>
                            Question {currentQuestionIndex + 1} /{' '}
                            {stateQuestions.length}
                        </span>
                    </div>
                    <Timer
                        duration={90}
                        onTimeUp={() => router.push('/results')}
                    />
                </div>

                <QuestionCard
                    text={current.text}
                    options={
                        Array.isArray(current.options)
                            ? (current.options as string[])
                            : []
                    }
                    selectedAnswer={selectedAnswers[current.id]}
                    onSelect={handleAnswer}
                />
            </div>
        </div>
    )
}
