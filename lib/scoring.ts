// lib/scoring.ts

/**
 * Returns a rank based on the score percentage
 */
type Rank = 'Novice' | 'Amateur' | 'Expert' | 'Master' | 'Grandmaster'
export function getRank(score: number, total: number): Rank {
    const percent = (score / total) * 100

    if (percent >= 100) return 'Grandmaster'
    if (percent >= 90) return 'Master'
    if (percent >= 75) return 'Expert'
    if (percent >= 60) return 'Amateur'
    return 'Novice'
}

/**
 * Returns bonus points based on rank
 */
export function getBonusFromRank(rank: Rank): number {
    switch (rank) {
        case 'Grandmaster':
            return 5
        case 'Master':
            return 3
        case 'Expert':
            return 2
        case 'Amateur':
            return 1
        default:
            return 0
    }
}

/**
 * Final score = correct answers + bonus
 */
export function calculateFinalScore(
    correct: number,
    total: number
): { score: number; bonus: number; rank: Rank } {
    const rank = getRank(correct, total)
    const bonus = getBonusFromRank(rank)
    const score = correct + bonus

    return { score, bonus, rank }
}
