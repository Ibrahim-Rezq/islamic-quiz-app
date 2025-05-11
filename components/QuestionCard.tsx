'use client'

import { cn } from '@/lib/utils'

type Props = {
    text: string
    options: string[]
    onSelect: (answer: string) => void
    selectedAnswer?: string
}

export default function QuestionCard({
    text,
    options,
    onSelect,
    selectedAnswer,
}: Props) {
    return (
        <div className='p-6 rounded-2xl shadow-xl space-y-6 border border-gray-700 bg-gray-800'>
            <h2 className='text-xl font-semibold text-indigo-300'>{text}</h2>
            <div className='grid grid-cols-1 gap-3'>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(option)}
                        className={cn(
                            'p-4 rounded-xl border text-left transition-all duration-200',
                            selectedAnswer === option
                                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                        )}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}
