import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 80,
    proxy: {
      "/api": {
        target: `http://13.213.37.237:8000`, // your backend
        changeOrigin: true,
      },
    },
  },
});
