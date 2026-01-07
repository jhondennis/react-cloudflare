# React + TypeScript + Vite Container Project

This project demonstrates a robust setup for a React application using **Vite** and **TypeScript**, containerized with **Docker** (using Bun and Nginx), and featuring granular routing management.

## Project Functionality

The application serves as a dashboard with authentication management. Key features include:

-   **Tech Stack**: React 18, TypeScript, Vite.
-   **State Management**: Zustand for global state (e.g., session management).
-   **Styling**: Material UI (MUI) & Emotion.
-   **HTTP Client**: Axios.

## Containerization

The project uses a multi-stage **Docker** build process optimized for performance and size:

1.  **Build Stage**: Uses `oven/bun:1.3.0-alpine` to install dependencies and build the application. It utilizes specific cache layers (`package.json`, `bun.lock`) to speed up rebuilds.
2.  **Runtime Stage**: Uses `nginx:1.27-alpine` to serve the static assets.
    -   Custom `nginx.conf` for optimized caching and routing fallback (SPA support).
    -   Environment variable injection at runtime using an entrypoint script (`env.sh`) to support "build once, deploy anywhere" patterns.

**Key Files:**
-   `Containerfile`: Defines the multi-stage build.
-   `compose.yml`: Docker Compose configuration for local development.

## Routing

Routing is handled by **React Router v7**, structured for scalability and security:

-   **Router Provider**: Centrally managed in `src/router/ReactRouterProvider.tsx`.
-   **Middleware**: Protected routes are wrapped in a `MiddlewareRoute` component that checks for authentication (via `useSessionStore`) and redirects accordingly.
    -   `PublicLayout`: For public pages (Home, Access Denied).
    -   `MainLayout`: For authenticated dashboard pages.
-   **Lazy Loading**: Routes are lazy-loaded (`lazy(() => import(...))`) to optimize initial bundle size. Suspense checks are handled via a `withSuspense` utility.
