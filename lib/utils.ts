// lib/utils.ts

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind class names with optional conditions
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
