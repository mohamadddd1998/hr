import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@admin": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared/src"),
    },
  },
});
 