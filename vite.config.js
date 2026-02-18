import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      // Rutas que quieres prerenderizar
      routes: ["/", "/sesion", "/servicios", "/soluciones", "/contact", "/avisolegal", "/terminos"]
    })
  ]
});
