export type QuestionType = 'multiple' | 'boolean'

export type Difficulty = 'easy' | 'medium' | 'hard'

export type Category =
    | 'general_knowledge'
    | 'science'
    | 'history'
    | 'geography'
    | 'entertainment'
    | 'sports'

export type Question = {
    id: string
    text: string
    options: string[]
    correct: string
    category: Category
    difficulty: Difficulty
}
