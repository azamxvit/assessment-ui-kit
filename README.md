# Frontend Exam Platform

![Status](https://img.shields.io/badge/status-completed-success)
![Tech](https://img.shields.io/badge/stack-Next.js_14_|_TypeScript_|_Tailwind_v4-blue)
![Tests](https://img.shields.io/badge/tests-Vitest_Passing-green)

A production-ready implementation of an interactive **QuestionCard** component featuring a scalable architecture, robust state management, and a modern design system. Built to demonstrate "Frontend Thinking" beyond simple UI rendering.

## 🚀 Key Features

* **Compound Component Architecture**: Logic is strictly separated from UI presentation using the "Smart Container / Dumb Components" pattern.
* **Robust State Machine**: Uses explicit states (`IDLE`, `SUBMITTING`, `SUCCESS`, `WRONG`) instead of fragile boolean flags to prevent race conditions.
* **Modern Design System**: Built with **Tailwind CSS v4** using CSS variables for semantic theming (Primary, Destructive, Foreground).
* **Dark Mode First**: Fully accessible dark/light mode toggle powered by `next-themes` and system preferences.
* **Optimistic UI**: Instant visual feedback for user interactions with strict input blocking during submissions.
* **Quality Assurance**: Includes Unit Tests via **Vitest** & React Testing Library.

## 🛠 Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Core**: React 18, TypeScript
* **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
* **Icons**: Lucide React
* **Testing**: Vitest, React Testing Library
* **Theming**: next-themes

## ⚙️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/azamxvit/exam-platform-core.git](https://github.com/azamxvit/exam-platform-core.git)
    cd exam-platform-core
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    # or npm install
    ```

3.  **Start the development server**
    ```bash
    pnpm dev
    ```

4.  **Run Tests**
    ```bash
    pnpm test
    # or npx vitest
    ```

5.  **How to verify**
    * Open `http://localhost:3000`.
    * Click **"Начать Экзамен"** to see the component in action.
    * Toggle the **Theme** (Sun/Moon icon) in the header to check Dark Mode.

## 🏗 Architecture & Decisions

* **`QuestionCard` (Smart Container)**: 
    * Manages the local state (`selectedId`, `status`).
    * Handles the "Check Answer" logic and API simulation.
    * Resets state automatically when `question.id` changes (via React `key` prop).

* **`QuestionComponents` (Dumb UI)**: 
    * Pure functional components (`AnswerOption`, `CardHeader`) that only receive data and callbacks.
    * Styled using semantic classes (`bg-primary`, `text-destructive`) to support theming automatically.

* **Tailwind v4 Configuration**:
    * Configuration is handled purely in CSS (`@theme` block).
    * Uses HSL variables for dynamic runtime theme switching without class flashing.

* **Client vs Server**: 
    * The Exam Page is marked as `"use client"` to handle interactivity, while the Layout and Metadata remain server-side for SEO optimization.

## 👤 Author

**Azamat Omirtay**
* GitHub: [@azamxvit](https://github.com/azamxvit)
* Role: Frontend Engineer

---
*Designed & Developed as a technical assessment case study.*