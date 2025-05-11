// components/Timer.tsx
'use client'

import { useEffect, useState } from 'react'

type TimerProps = {
    duration: number // in seconds
    onTimeUp: () => void
}

export default function Timer({ duration, onTimeUp }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp()
            return
        }

        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timer)
    }, [timeLeft, onTimeUp])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`

    // Determine color based on time left
    const getTimerColor = () => {
        if (timeLeft <= duration * 0.25) return 'text-rose-500' // Less than 25% time left
        if (timeLeft <= duration * 0.5) return 'text-amber-500' // Less than 50% time left
        return 'text-emerald-500' // More than 50% time left
    }

    return (
        <div className='flex items-center'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-1.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
            </svg>
            <span className={`font-mono font-bold ${getTimerColor()}`}>
                {formattedTime}
            </span>
        </div>
    )
}
