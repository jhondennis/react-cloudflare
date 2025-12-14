export interface EnvProps {
  API_URL: string;
}

function loadEnv(): EnvProps {
  // DEV (Vite)
  if (import.meta.env.DEV) {
    return {
      API_URL: import.meta.env.VITE_API_URL,
    };
  }

  // PROD (runtime - nginx)
  return (window as any).__ENV__ as EnvProps;
}

export const env = loadEnv();
