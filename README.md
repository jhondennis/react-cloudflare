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

## CI/CD & Deployment

The project uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD), automatically deploying to **Cloudflare Pages**.

### Workflow: `.github/workflows/ci.yml`

-   **Triggers**:
    -   Pushes to `develop`.
    -   Pull Requests to `develop`, `test`, `main` (when closed and merged).
-   **Build Process**:
    -   Runs on `ubuntu-latest`.
    -   Sets up **Bun** (v1.3.0).
    -   Installs dependencies and builds the project using `bun run build`.
-   **Deployment**:
    -   Uses **Wrangler** to deploy the `dist` folder to Cloudflare Pages.
    -   Deploys to a specific branch environment based on the event (PR base ref or branch name).
    -   **Secrets**: Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets in the GitHub repository.

