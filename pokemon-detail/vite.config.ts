import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonDetail",
      filename: "remoteEntry.js",
      exposes: { "./PokemonDetailPage": "./src/App.tsx" },
      remotes: { ShellStore: "http://localhost:3000/assets/remoteEntry.js" },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    host: "localhost",
    port: 3001,
    cors: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
