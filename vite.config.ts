import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import runtimeEnv from "vite-plugin-runtime-env";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), runtimeEnv()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
