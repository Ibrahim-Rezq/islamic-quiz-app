'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className='bg-base-100 min-h-screen flex flex-col'>
            {/* Navbar */}
            <div className='navbar bg-base-100 fixed top-0 z-50 shadow-md'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <a href='#features'>Features</a>
                            </li>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#testimonials'>Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <a className='btn btn-ghost normal-case text-xl'>
                        <span className='text-primary font-bold'>Islamic</span>
                        Quiz
                    </a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a href='#features'>Features</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#testimonials'>Testimonials</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label className='swap swap-rotate px-2'>
                        <input type='checkbox' data-toggle-theme='dark,light' />
                        <svg
                            className='swap-on fill-current w-6 h-6'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                        </svg>
                        <svg
                            className='swap-off fill-current w-6 h-6'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                        </svg>
                    </label>
                    <Link href='/quiz/select' className='btn btn-primary'>
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className='hero min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-16'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <Image
                        src='/api/placeholder/600/600'
                        width={600}
                        height={600}
                        alt='Hero Image'
                        className='max-w-sm rounded-lg shadow-2xl'
                    />
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold leading-tight'>
                            Test Your Islamic Knowledge With Fun Quizzes
                        </h1>
                        <p className='py-6 text-lg opacity-90'>
                            Embark on a journey of Islamic learning through our
                            interactive quizzes. Challenge yourself, track your
                            progress, and deepen your understanding of the
                            Quran, Hadith, and Islamic history.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/quiz/select'
                                id='cta'
                                className='btn btn-primary btn-lg'
                            >
                                Start Quiz Now
                            </Link>
                            <Link
                                href='#features'
                                className='btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary'
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className='stats shadow bg-base-200 text-base-content mt-8'>
                            <div className='stat'>
                                <div className='stat-figure text-secondary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        className='inline-block w-8 h-8 stroke-current'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        ></path>
                                    </svg>
                                </div>
                                <div className='stat-title'>Quizzes</div>
                                <div className='stat-value'>500+</div>
                            </div>

                            <div className='stat'>
                                <div className='stat-figure text-secondary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        className='inline-block w-8 h-8 stroke-current'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                                        ></path>
                                    </svg>
                                </div>
                                <div className='stat-title'>Topics</div>
                                <div className='stat-value'>15+</div>
                            </div>

                            <div className='stat'>
                                <div className='stat-figure text-secondary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        className='inline-block w-8 h-8 stroke-current'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                                        ></path>
                                    </svg>
                                </div>
                                <div className='stat-title'>Users</div>
                                <div className='stat-value'>50k+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section id='features' className='py-20 bg-base-100'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-primary mb-4'>
                            App Features
                        </h2>
                        <div className='divider max-w-xs mx-auto'></div>
                        <p className='text-lg max-w-2xl mx-auto'>
                            Discover what makes our Islamic Quiz App unique and
                            effective for learners of all levels
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300'>
                            <figure className='px-10 pt-10'>
                                <div className='rounded-full bg-primary/10 p-6 text-primary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-10 w-10'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                </div>
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title'>
                                    Timely Challenges
                                </h3>
                                <p>
                                    Test your knowledge against the clock with
                                    timed quizzes designed to challenge and
                                    engage.
                                </p>
                            </div>
                        </div>

                        <div className='card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300'>
                            <figure className='px-10 pt-10'>
                                <div className='rounded-full bg-secondary/10 p-6 text-secondary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-10 w-10'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                        />
                                    </svg>
                                </div>
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title'>
                                    Variety of Topics
                                </h3>
                                <p>
                                    From Quran to Hadith, Islamic history to
                                    fiqh, explore diverse topics to deepen your
                                    knowledge.
                                </p>
                            </div>
                        </div>

                        <div className='card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300'>
                            <figure className='px-10 pt-10'>
                                <div className='rounded-full bg-accent/10 p-6 text-accent'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-10 w-10'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                        />
                                    </svg>
                                </div>
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title'>Track Progress</h3>
                                <p>
                                    Monitor your quiz results, scores, and
                                    improvements over time with detailed
                                    analytics.
                                </p>
                            </div>
                        </div>

                        <div className='card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300'>
                            <figure className='px-10 pt-10'>
                                <div className='rounded-full bg-primary/10 p-6 text-primary'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-10 w-10'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M13 10V3L4 14h7v7l9-11h-7z'
                                        />
                                    </svg>
                                </div>
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title'>
                                    Multiple Difficulty Levels
                                </h3>
                                <p>
                                    Whether you`&apos;`re a beginner or scholar,
                                    choose difficulty levels that match your
                                    knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quiz Categories */}
            <section className='py-20 bg-base-200'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-primary mb-4'>
                            Quiz Categories
                        </h2>
                        <div className='divider max-w-xs mx-auto'></div>
                        <p className='text-lg max-w-2xl mx-auto'>
                            Explore our diverse range of Islamic quiz categories
                        </p>
                    </div>

                    <div className='carousel carousel-center max-w-full p-4 space-x-4 rounded-box'>
                        {[
                            {
                                title: 'Quranic Studies',
                                desc: 'Test your knowledge of Quranic verses, tafsir, and memorization.',
                            },
                            {
                                title: 'Hadith',
                                desc: 'Challenge yourself with questions about the sayings of Prophet Muhammad (PBUH).',
                            },
                            {
                                title: 'Islamic History',
                                desc: 'Learn about key events and figures throughout Islamic history.',
                            },
                            {
                                title: 'Fiqh',
                                desc: 'Explore the principles of Islamic jurisprudence and rulings.',
                            },
                            {
                                title: 'Seerah',
                                desc: 'Test your knowledge about the life of Prophet Muhammad (PBUH).',
                            },
                        ].map((category, index) => (
                            <div className='carousel-item' key={index}>
                                <div className='card w-64 bg-base-100 shadow-xl'>
                                    <figure className='px-4 pt-4'>
                                        <Image
                                            src='/api/placeholder/300/200'
                                            width={300}
                                            height={200}
                                            alt={category.title}
                                            className='rounded-xl'
                                        />
                                    </figure>
                                    <div className='card-body items-center text-center p-4'>
                                        <h3 className='card-title'>
                                            {category.title}
                                        </h3>
                                        <p>{category.desc}</p>
                                        <div className='card-actions'>
                                            <button className='btn btn-primary btn-sm'>
                                                Start Quiz
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id='about' className='py-20 bg-base-100'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col lg:flex-row items-center gap-12'>
                        <div className='lg:w-1/2'>
                            <Image
                                src='/api/placeholder/600/400'
                                width={600}
                                height={400}
                                alt='About Image'
                                className='rounded-lg shadow-2xl'
                            />
                        </div>
                        <div className='lg:w-1/2'>
                            <h2 className='text-4xl font-bold text-primary mb-6'>
                                Why Choose This App?
                            </h2>
                            <div className='divider max-w-xs'></div>
                            <p className='text-lg mb-6'>
                                This quiz app is dedicated to helping you deepen
                                your understanding of Islam, offering a fun and
                                interactive way to learn. From mastering your
                                knowledge of the Quran to exploring the rich
                                history of Islam, this app is built for Muslims
                                who want to challenge themselves and grow in
                                their faith.
                            </p>

                            <div className='flex flex-col gap-4'>
                                {[
                                    {
                                        title: 'Authentic Knowledge',
                                        desc: 'All questions are based on authentic Islamic sources and reviewed by scholars.',
                                    },
                                    {
                                        title: 'Community Learning',
                                        desc: 'Compete with friends and family to make learning more engaging and fun.',
                                    },
                                    {
                                        title: 'Regular Updates',
                                        desc: 'New quizzes and topics added regularly to keep your learning journey fresh.',
                                    },
                                ].map((item, index) => (
                                    <div
                                        className='flex items-start gap-4'
                                        key={index}
                                    >
                                        <div className='badge badge-primary p-3'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-5 w-5'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M5 13l4 4L19 7'
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-lg'>
                                                {item.title}
                                            </h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-8'>
                                <Link
                                    href='/quiz/select'
                                    className='btn btn-primary'
                                >
                                    Start Learning Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id='testimonials' className='py-20 bg-base-200'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-primary mb-4'>
                            What Our Users Say
                        </h2>
                        <div className='divider max-w-xs mx-auto'></div>
                        <p className='text-lg max-w-2xl mx-auto'>
                            Read testimonials from our dedicated users
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            {
                                name: 'Ahmed S.',
                                rating: 5,
                                comment:
                                    'This app has helped me improve my understanding of the Quran tremendously. The questions are challenging yet engaging, and I learn something new every day.',
                            },
                            {
                                name: 'Fatima R.',
                                rating: 5,
                                comment:
                                    'I use this app with my children to make learning about Islam fun. The different difficulty levels allow each of them to participate at their own pace.',
                            },
                            {
                                name: 'Yusuf M.',
                                rating: 4,
                                comment:
                                    'As a student of Islamic studies, this app has been invaluable for testing my knowledge. The variety of topics covers everything I need to reinforce my learning.',
                            },
                        ].map((testimonial, index) => (
                            <div
                                className='card bg-base-100 shadow-xl'
                                key={index}
                            >
                                <div className='card-body'>
                                    <div className='flex items-center mb-4'>
                                        <div className='avatar'>
                                            <div className='w-16 rounded-full'>
                                                <Image
                                                    src='/api/placeholder/100/100'
                                                    width={100}
                                                    height={100}
                                                    alt='User'
                                                />
                                            </div>
                                        </div>
                                        <div className='ml-4'>
                                            <h4 className='font-bold'>
                                                {testimonial.name}
                                            </h4>
                                            <div className='rating rating-sm'>
                                                {[...Array(5)].map((_, i) => (
                                                    <input
                                                        key={i}
                                                        type='radio'
                                                        name={`rating-${index}`}
                                                        className='mask mask-star-2 bg-orange-400'
                                                        checked={
                                                            i <
                                                            testimonial.rating
                                                        }
                                                        readOnly
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p>`&quot;`{testimonial.comment}`&quot;`</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 bg-primary text-white'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-4xl font-bold mb-6'>
                        Ready to Test Your Knowledge?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto'>
                        Join thousands of Muslims around the world who are
                        deepening their understanding of Islam through our
                        interactive quizzes.
                    </p>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        <Link
                            href='/quiz/select'
                            className='btn btn-lg bg-white text-primary hover:bg-gray-100 border-none'
                        >
                            Start Quiz Now
                        </Link>
                        <Link
                            href='#'
                            className='btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary'
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='footer p-10 bg-neutral text-neutral-content'>
                <div>
                    <span className='footer-title'>Islamic Quiz</span>
                    <p className='max-w-xs'>
                        Enhancing your Islamic knowledge through interactive
                        quizzes and engaging learning experiences.
                    </p>
                    <div className='mt-4'>
                        <div className='grid grid-flow-col gap-4'>
                            <a className='btn btn-ghost btn-sm rounded-btn'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    className='fill-current'
                                >
                                    <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                                </svg>
                            </a>
                            <a className='btn btn-ghost btn-sm rounded-btn'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    className='fill-current'
                                >
                                    <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                                </svg>
                            </a>
                            <a className='btn btn-ghost btn-sm rounded-btn'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    className='fill-current'
                                >
                                    <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='footer-title'>Explore</span>
                    <Link href='/' className='link link-hover'>
                        Home
                    </Link>
                    <Link href='#features' className='link link-hover'>
                        Features
                    </Link>
                    <Link href='#about' className='link link-hover'>
                        About
                    </Link>
                    <Link href='#testimonials' className='link link-hover'>
                        Testimonials
                    </Link>
                </div>
                <div>
                    <span className='footer-title'>Quiz Categories</span>
                    <Link href='#' className='link link-hover'>
                        Quranic Studies
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Hadith
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Islamic History
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Fiqh
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Seerah
                    </Link>
                </div>
                <div>
                    <span className='footer-title'>Legal</span>
                    <Link href='#' className='link link-hover'>
                        Terms of use
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Privacy policy
                    </Link>
                    <Link href='#' className='link link-hover'>
                        Cookie policy
                    </Link>
                </div>
                <div>
                    <span className='footer-title'>Subscribe</span>
                    <div className='form-control w-80'>
                        <label className='label'>
                            <span className='label-text text-neutral-content'>
                                Enter your email for updates
                            </span>
                        </label>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='username@site.com'
                                className='input input-bordered w-full pr-16 bg-neutral-focus text-neutral-content'
                            />
                            <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='footer footer-center p-4 bg-base-300 text-base-content'>
                <div>
                    <p>© 2025 Islamic Quiz App. All rights reserved.</p>
                </div>
            </div>

            {/* Add CSS styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                body {
                    font-family: 'Poppins', sans-serif;
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    )
}
