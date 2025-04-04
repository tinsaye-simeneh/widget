---

## Updated `README.md`

```
A Next.js application for displaying a list of widgets and their details, built as part of a UI/UX challenge. The app features a `Widget List Page` (homepage) and a `Single Widget Page` (dynamic route `/widgets/[id]`), with navigation, state management, and responsive design. This project leverages the Next.js App Router (`src/app`) for modern routing and React Server Components.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Development Notes](#development-notes)
- [Testing](#testing)
- [Potential Improvements](#potential-improvements)
- [Author](#author)
- [License](#license)

## Features

- **Widget List Page** (`/`): Displays a grid of widgets with a search bar for filtering.
- **Single Widget Page** (`/widgets/[id]`): Shows detailed information about a selected widget, including a downloadable PDF example output and a comments section with a form to share thoughts.
- Responsive design using Tailwind CSS, ensuring compatibility across mobile, tablet, and desktop devices.
- State management with Zustand for handling widget data.
- Custom styling with SCSS (e.g., `highlight` class for tags like "css", "cross-browser").
- Client-side navigation using Next.js App Router.

## Tech Stack

- **Next.js** (v14.x, App Router)
- **TypeScript** (for type safety)
- **SCSS** (for custom styles)
- **Tailwind CSS** (for utility-first styling)
- **React** (v18.x)
- **Zustand** (for state management)
- **Git** (for version control)

## Setup Instructions

### Prerequisites

- **Node.js** (v18.x or later recommended)
- **npm** (v9.x or later)
- **Git**

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd my-widget-app
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the app.

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.

## Development Notes

- **Next.js App Router**: The project uses the App Router (`src/app`) for routing, with `layout.tsx` defining the shared layout and `page.tsx` files for individual routes.
- **Client Components**: Components using hooks or client-side features (e.g., `useEffect`, `useState`, Zustand) are marked with `'use client'` to opt into client-side rendering.
- **State Management**: Zustand is used to manage the widget list and selected widget state, ensuring efficient updates across pages.
- **Styling**:
  - Tailwind CSS is used for responsive layouts and utility classes.
  - SCSS is used for custom styles (e.g., the `highlight` class for tags like "css", "cross-browser").
- **Data Fetching**: Currently uses mock data for widgets. Replace with a real API in production (e.g., `/api/widgets` for the list, `/api/widgets/[id]` for details).
- **Navigation**: Uses `next/navigation` for client-side routing (e.g., `useRouter` for programmatic navigation).

## Potential Improvements

- **Pagination/Infinite Scrolling**: Add pagination or infinite scrolling to the Widget List Page to handle large datasets efficiently.
- **Loading States**: Implement loading for better UX during data fetching.
- **Accessibility**: Enhance accessibility with ARIA labels, keyboard navigation, and screen reader support.
- **SEO**: Add metadata for each widget page to improve search engine indexing.

## Author

Built by Tinsaye Simeneh as part for implementing a Single Widget Page with navigation from a Widget List Page.
