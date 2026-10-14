import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "comida.app.br",
      "www.comida.app.br",
      "localhost",
      "127.0.0.1",
    ],
  },
});
