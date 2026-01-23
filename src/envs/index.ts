export interface EnvProps {
  API_URL: string;
}

export const envs = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
};
