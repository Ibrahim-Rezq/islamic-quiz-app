# 📚 Islamic Studies Quiz App

A modern web application for testing and improving your knowledge of Islamic Studies. Built with Next.js 15, Tailwind CSS, Daisy UI, and Prisma. This app features a smooth quiz experience with ranking, scoring, and difficulty options, tailored for Muslims and Islamic studies students.

---

## ✨ Features

-   Modern landing page introducing the app
-   Timed quizzes with category and difficulty selection
-   Intelligent scoring and bonus system based on rank
-   Clean UI using Tailwind CSS + Daisy UI
-   Randomized multiple-choice questions (MCQs)

---

## 🧰 Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Styling**: Tailwind CSS + Daisy UI
-   **State Management**: Zustand
-   **Database**: Prisma with SQLite (to be replaced with postgresql)
-   **Routing**: App Router + dynamic routes
-   **Hosting**: Ready for Vercel deployment

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ibrahim-Rezq/islamic-quiz-app
cd islamic-quiz-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Database

```bash
npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts
```

### 4. Run the App

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

---

## 🗺️ Project Roadmap

### ✅ MVP Completed

-   [x] Landing page focused on Islamic studies
-   [x] Category and difficulty selection page
-   [x] Quiz system with:
    -   [x] Randomized questions
    -   [x] Timer
    -   [x] Scoring and penalty
    -   [x] Bonus system based on rank
-   [x] SQLite DB with seeded Islamic categories and questions
-   [x] Modern result page with rank badge
-   [x] Clean UI with Daisy UI

---

### 🧩 In Progress

-   [ ] Add more questions and categories to the seed data
-   [ ] Store quiz results in local storage
-   [ ] Improve responsiveness and UX polish
---

### 🔜 Planned Features

-   [ ] User authentication with Clerk
-   [ ] User dashboard to track quiz history and scores
-   [ ] Admin panel for managing questions and categories
-   [ ] Leaderboard (real-time or daily) with scoring rank
-   [ ] Analytics tracking (time spent, accuracy by topic)
-   [ ] Submit-your-own-question feature (with review system)
-   [ ] i18n support (Arabic / English toggle)
-   [ ] Real-time multiplayer quiz mode
-   [ ] Mobile-first optimization
-   [ ] Add accessibility enhancements
---

## 🤝 Contributing

Pull requests and contributions are welcome. Please fork the repository and create a new branch.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

This app is designed to help Muslims test and strengthen their knowledge in Islamic subjects in an interactive and enjoyable way.

---
