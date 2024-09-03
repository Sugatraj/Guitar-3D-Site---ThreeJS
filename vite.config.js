import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Guitar-3D-Site-ThreeJS/",
  plugins: [react()],
});
