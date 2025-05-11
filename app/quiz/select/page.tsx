'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const categories = ['Quran', 'Hadith', 'Fiqh', 'physics', 'Math', 'Chemistry']
const difficulties = [
  { id: 'EASY', label: 'Easy', color: 'bg-emerald-600' },
  { id: 'MEDIUM', label: 'Medium', color: 'bg-amber-600' },
  { id: 'HARD', label: 'Hard', color: 'bg-rose-700' }
]

const SelectQuiz = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const router = useRouter()

  const startQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      router.push(`/quiz/${selectedCategory}/${selectedDifficulty}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8 border border-gray-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-300 mb-2">
            Choose Your Quiz
          </h1>
          <p className="text-gray-400">Select a category and difficulty level to begin</p>
        </div>

        {/* Category Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-indigo-300 flex items-center">
            <span className="mr-2">📚</span> Category
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-indigo-300 flex items-center">
            <span className="mr-2">🎯</span> Difficulty
          </h2>
          <div className="flex gap-3">
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`flex-1 py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                  selectedDifficulty === diff.id
                    ? `${diff.color} text-white shadow-md`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* Start Quiz Button */}
        <button
          onClick={startQuiz}
          disabled={!selectedCategory || !selectedDifficulty}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
            selectedCategory && selectedDifficulty
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedCategory && selectedDifficulty ? 'Start Quiz' : 'Select options to continue'}
        </button>
        
        {selectedCategory && selectedDifficulty && (
          <div className="text-center text-sm text-indigo-300">
            Ready to test your knowledge in {selectedCategory} ({selectedDifficulty.toLowerCase()})
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectQuiz