import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aviso_legal: resolve(__dirname, "aviso_legal.html"),
        blog: resolve(__dirname, "blog.html"),
        contacto: resolve(__dirname, "contacto.html"),
        cursos: resolve(__dirname, "cursos.html"),
        login: resolve(__dirname, "login.html"),
        quienes_somos: resolve(__dirname, "quienes_somos.html"),
        registro: resolve(__dirname, "registro.html"),
        noticia1: resolve(__dirname, "blog/noticia1.html"),
        noticia2: resolve(__dirname, "blog/noticia2.html"),
        noticia3: resolve(__dirname, "blog/noticia3.html"),
        blockchain: resolve(__dirname, "cursos/blockchain.html"),
        ciberseguridad: resolve(__dirname, "cursos/ciberseguridad.html"),
        full_stack: resolve(__dirname, "cursos/full_stack.html"),
        ia: resolve(__dirname, "cursos/ia.html"),
      },
    },
  },
});
