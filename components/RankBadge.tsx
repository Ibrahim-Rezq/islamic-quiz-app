// components/RankBadge.tsx
import React from 'react'

type RankBadgeProps = {
  rank: 'Novice' | 'Amateur' | 'Expert' | 'Master' | 'Grandmaster'
}

export default function RankBadge({ rank }: RankBadgeProps) {
  // Define badge styles based on rank
  const getBadgeStyles = () => {
    switch (rank) {
      case 'Novice':
        return {
          bgColor: 'bg-gradient-to-r from-gray-500 to-gray-600',
          borderColor: 'border-gray-400',
          textColor: 'text-gray-200',
          icon: '🌱',
          shadowColor: 'shadow-gray-700'
        }
      case 'Amateur':
        return {
          bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
          borderColor: 'border-blue-400',
          textColor: 'text-blue-100',
          icon: '🔍',
          shadowColor: 'shadow-blue-700'
        }
      case 'Expert':
        return {
          bgColor: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
          borderColor: 'border-emerald-400',
          textColor: 'text-emerald-100',
          icon: '⭐',
          shadowColor: 'shadow-emerald-700'
        }
      case 'Master':
        return {
          bgColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
          borderColor: 'border-amber-400',
          textColor: 'text-amber-100',
          icon: '🏆',
          shadowColor: 'shadow-amber-700'
        }
      case 'Grandmaster':
        return {
          bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
          borderColor: 'border-purple-400',
          textColor: 'text-purple-100',
          icon: '👑',
          shadowColor: 'shadow-purple-700'
        }
      default:
        return {
          bgColor: 'bg-gradient-to-r from-gray-500 to-gray-600',
          borderColor: 'border-gray-400',
          textColor: 'text-gray-200',
          icon: '🔍',
          shadowColor: 'shadow-gray-700'
        }
    }
  }

  const styles = getBadgeStyles()

  return (
    <div className="flex justify-center">
      <div className={`${styles.bgColor} rounded-xl px-8 py-4 border-2 ${styles.borderColor} shadow-lg ${styles.shadowColor} transform transition-all duration-300 hover:scale-105`}>
        <div className="flex flex-col items-center">
          <div className="text-3xl mb-2">{styles.icon}</div>
          <div className="text-center">
            <div className="text-xl font-bold uppercase tracking-wider mb-1 text-white">Rank</div>
            <div className={`text-2xl font-bold ${styles.textColor}`}>{rank}</div>
          </div>
        </div>
      </div>
    </div>
  )
}