import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    tsconfigPaths(),
    tanstackStart({ customViteReactPlugin: true, target: "node-server", tsr: { target: "react" } }),
    react(),
    tailwindcss(),
  ],
});
