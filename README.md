# Widget Viewer App

A Next.js application for displaying a list of widgets and their details, built as part of a UI/UX challenge. The app features a `Widget List Page` (homepage) and a `Single Widget Page` (`/widgets/[id]`), complete with interactive comments, data fetching from a mock API, pagination, and responsive design. Built using the Next.js App Router (`src/app`) and React Server Components.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Development Notes](#development-notes)
- [Potential Improvements](#potential-improvements)
- [Author](#author)

---

## Features

- **Widget List Page** (`/`)
  - Displays a grid of widgets with a **search bar** and **pagination**.
  - Widgets are fetched from a **mock API** simulating server data.
  - Responsive card layout using Tailwind CSS.

- **Single Widget Page** (`/widgets/[id]`)
  - Shows detailed information for a selected widget.
  - Includes a **comment section** with:
    - Form for submitting comments
    - Live interactivity with `useState`
    - **Comments fetched from mock API**
    - **Real-time addition of new comments**
    - Basic like count and timestamp formatting

- **Pagination Support**
  - Widget list supports pagination for scalability with large datasets.

- **Responsive UI**
  - Mobile-first design using Tailwind CSS.
  - Accessibility considerations for keyboard users and screen readers.

- **State Management**
  - Managed globally with Zustand for widget data across components.

---

## Tech Stack

- **Next.js** (v14.x, App Router)
- **TypeScript** (for type safety)
- **Tailwind CSS** (utility-first styling)
- **SCSS** (custom styles)
- **React 18** (concurrent rendering)
- **Zustand** (lightweight global state)
- **Mock API / MSW or local data** (for development)
- **Git** (for version control)

---

## Setup Instructions

### Prerequisites

- **Node.js** (v18.x or later)
- **npm** (v9.x or later)
- **Git**

### Installation

```bash
git clone https://github.com/tinsaye-simeneh/widget
cd widget
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the app in action.

### Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
---

## Development Notes

- **App Router**:
  - Located in `src/app`, using modern file-based routing with layouts and loading states.
  
- **Client Components**:
  - `use client` is added to all interactive components like comments and forms.

- **State Management**:
  - Zustand stores widget and pagination state, improving shared accessibility across components.

- **Data Fetching**:
  - Comments and widget data are fetched from **mock API endpoints**
  - Easily replaceable with real APIs (e.g., Supabase, Firebase, or RESTful backends).

- **Styling**:
  - Tailwind CSS handles layout, spacing, typography.
  - SCSS used for specific customizations like `.highlight` classes.

- **Pagination Logic**:
  - Pagination parameters managed via `useSearchParams()` and `router.push()`.

- **Comment Section Logic**:
  - Controlled form input using `useState`
  - Comments added optimistically to UI
  - Uses current timestamp and mock authors
  - Likes are displayed but not interactive (optional future feature)

---

## Potential Improvements

- ✅ **Pagination**: Already implemented on the widget list
- ✅ **Comment Interactivity**: Add, display, and manage new comments in real time
- ✅ **Mock API**: Use a local data file or MSW for mocking endpoints
- 🌐 **i18n**: Add internationalization for multilingual support
- 🔒 **Auth Integration**: Optional login to restrict comment posting
- 🔍 **Search Improvements**: Add debounce, fuzzy matching
- 📄 **PDF Generation**: Downloadable widget outputs or reports

---

## Author

Built with 💻 by **Tinsaye Simeneh** as part of a UI/UX for implementing dynamic navigation, interactivity, and modern frontend techniques using Next.js App Router.

---

> Feel free to fork, clone, and build on top of this! Suggestions or contributions are welcome.
