import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MMHub",
      components: {
        LastUpdated: './src/components/CustomLastUpdate.astro',
      },
      customCss: [
        "./src/tailwind.css",
      ],
      sidebar: [{
        label: "Guias",
        autogenerate: {
          directory: "guides"
        }
      }, {
        label: "Abertura de Chamados",
        autogenerate: {
          directory: "chamados"
        }
      }, {
        label: "VOIP/Telefonia",
        autogenerate: {
          directory: "voip"
        }
      }, {
        label: "Setores x Responsabilidade",
        autogenerate: {
          directory: "setores"
        }
      }]
    }),
    tailwind({
      // Desabilita os estilos base padrões:
      applyBaseStyles: false,
    }),
  ],
});
