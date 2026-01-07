export interface EnvProps {
  API_URL: string;
}

function loadEnv(): EnvProps {
  if (import.meta.env.DEV) {
    const { VITE_API_URL } = import.meta.env;

    return {
      API_URL: VITE_API_URL,
    };
  }

  return (window as any).__ENV__ as EnvProps;
}

export const envs = loadEnv();
