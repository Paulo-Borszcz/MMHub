import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMHub",
      customCss: [
        "./src/tailwind.css",
      ],
      sidebar: [
        {
          label: "Guias",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Abertura de Chamados",
          autogenerate: {
            directory: "chamados",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({
      // Desabilita os estilos base padrões:
      applyBaseStyles: false,
    }),
  ],
});
