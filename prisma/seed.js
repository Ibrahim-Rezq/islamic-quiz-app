// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.question.deleteMany()
    await prisma.category.deleteMany()

    const physics = await prisma.category.create({
        data: {
            name: 'physics',
            questions: {
                create: [
                    {
                        text: 'What is the SI unit of force?',
                        options: JSON.stringify([
                            'Newton',
                            'Joule',
                            'Watt',
                            'Pascal',
                        ]),
                        correct: 'Newton',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Speed = ?',
                        options: JSON.stringify([
                            'Distance/Time',
                            'Mass*Accel',
                            'Time*Distance',
                        ]),
                        correct: 'Distance/Time',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Who proposed the laws of motion?',
                        options: JSON.stringify([
                            'Newton',
                            'Einstein',
                            'Galileo',
                            'Tesla',
                        ]),
                        correct: 'Newton',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Which quantity has both magnitude and direction?',
                        options: JSON.stringify([
                            'Scalar',
                            'Vector',
                            'Speed',
                            'Mass',
                        ]),
                        correct: 'Vector',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'What is the speed of light in vacuum?',
                        options: JSON.stringify([
                            '3x10^8 m/s',
                            '1.5x10^8 m/s',
                            '3x10^6 m/s',
                            'None',
                        ]),
                        correct: '3x10^8 m/s',
                        difficulty: 'MEDIUM',
                    },
                    {
                        text: 'Work = ?',
                        options: JSON.stringify([
                            'Force × Distance',
                            'Power × Time',
                            'Energy / Time',
                        ]),
                        correct: 'Force × Distance',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Which law states F = ma?',
                        options: JSON.stringify([
                            'Newton’s Second Law',
                            'Ohm’s Law',
                            'Hooke’s Law',
                        ]),
                        correct: 'Newton’s Second Law',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Electric current is measured in?',
                        options: JSON.stringify([
                            'Amperes',
                            'Volts',
                            'Watts',
                            'Coulombs',
                        ]),
                        correct: 'Amperes',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Power = ?',
                        options: JSON.stringify([
                            'Work / Time',
                            'Energy × Time',
                            'Voltage / Current',
                        ]),
                        correct: 'Work / Time',
                        difficulty: 'MEDIUM',
                    },
                    {
                        text: 'Unit of frequency?',
                        options: JSON.stringify([
                            'Hertz',
                            'Tesla',
                            'Joule',
                            'Ampere',
                        ]),
                        correct: 'Hertz',
                        difficulty: 'EASY',
                    },
                ],
            },
        },
    })

    const math = await prisma.category.create({
        data: {
            name: 'math',
            questions: {
                create: [
                    {
                        text: 'What is 5 + 7?',
                        options: JSON.stringify(['12', '10', '11', '13']),
                        correct: '12',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'What is the derivative of x²?',
                        options: JSON.stringify(['2x', 'x', 'x²', '1']),
                        correct: '2x',
                        difficulty: 'MEDIUM',
                    },
                ],
            },
        },
    })

    const chemistry = await prisma.category.create({
        data: {
            name: 'chemistry',
            questions: {
                create: [
                    {
                        text: 'H2O is the chemical formula for?',
                        options: JSON.stringify([
                            'Water',
                            'Hydrogen Peroxide',
                            'Hydrogen',
                            'Oxygen',
                        ]),
                        correct: 'Water',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Atomic number of Carbon?',
                        options: JSON.stringify(['6', '12', '8', '10']),
                        correct: '6',
                        difficulty: 'EASY',
                    },
                ],
            },
        },
    })

    const islamic = await prisma.category.create({
        data: {
            name: 'islamic studies',
            questions: {
                create: [
                    {
                        text: 'How many daily prayers are there in Islam?',
                        options: JSON.stringify(['5', '3', '2', '7']),
                        correct: '5',
                        difficulty: 'EASY',
                    },
                    {
                        text: 'Who is the final prophet in Islam?',
                        options: JSON.stringify([
                            'Muhammad ﷺ',
                            'Isa (Jesus)',
                            'Musa (Moses)',
                            'Ibrahim (Abraham)',
                        ]),
                        correct: 'Muhammad ﷺ',
                        difficulty: 'EASY',
                    },
                ],
            },
        },
    })

    console.log(
        `Seeded ${[physics, math, chemistry, islamic].length} categories`
    )
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
