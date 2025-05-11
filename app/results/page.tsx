// app/results/page.tsx
'use client'

import { useQuiz } from '@/hooks/useQuiz'
import { RankBadge } from '@/components'
import { calculateFinalScore } from '@/lib/scoring'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ResultsPage() {
  const { score, questions, reset } = useQuiz()
  const router = useRouter()
  
  const total = questions.length
  const { score: finalScore, bonus, rank } = calculateFinalScore(score, total)
  
  useEffect(() => {
    if (!questions || questions.length === 0) {
      router.push('/')
    }
  }, [questions, router])

  if (!questions || questions.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950'>
        <div className='max-w-xl w-full space-y-8 p-6 rounded-xl shadow-xl bg-gray-800 border border-gray-700'>
          <div className='animate-pulse space-y-4'>
            <div className='h-6 bg-gray-700 rounded w-1/3 mx-auto'></div>
            <div className='h-4 bg-gray-700 rounded w-2/3 mx-auto'></div>
            <div className='h-4 bg-gray-700 rounded w-1/2 mx-auto'></div>
            <div className='h-10 bg-gray-700 rounded w-full'></div>
            <div className='h-10 bg-gray-700 rounded w-full'></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-xl w-full space-y-8 p-8 rounded-2xl shadow-xl bg-gray-800 border border-gray-700'>
        {/* Confetti Animation at the top */}
        <div className="flex justify-center mb-4">
          <div className="text-4xl">🎉</div>
        </div>
        
        {/* Title */}
        <h1 className='text-3xl font-bold text-center text-indigo-300 mb-6'>
          Quiz Completed
        </h1>

        {/* Score Section */}
        <div className='text-center space-y-6'>
          <div className='bg-gray-700 p-6 rounded-xl'>
            <div className='text-xl mb-4 flex items-center justify-center'>
              <span className='text-gray-300 mr-2'>Your Score:</span>
              <span className='font-bold text-indigo-300 text-3xl'>
                {score}
              </span>
              <span className='text-gray-400 mx-2'>/</span>
              <span className='text-gray-300'>{total}</span>
            </div>

            <div className='text-lg'>
              <span className='text-gray-300 mr-2'>Bonus Points:</span>
              <span className='font-semibold text-emerald-400'>
                +{bonus}
              </span>
            </div>
          </div>

          {/* Rank Badge */}
          <div className="py-4">
            <RankBadge rank={rank} />
          </div>
        </div>

        {/* Button Section */}
        <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
          <button
            className='px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg transition-all duration-300 w-full'
            onClick={() => {
              reset()
              router.push('/')
            }}
          >
            Home
          </button>
          <button
            className='px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg transition-all duration-300 w-full'
            onClick={() => {
              reset()
              router.back()
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}