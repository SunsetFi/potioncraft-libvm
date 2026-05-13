// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";

import { getTagSidebarItems } from "./config/sidebar/tags";

// https://astro.build/config
export default defineConfig({
  site: "https://sunsetfi.github.io",
  base: "/potioncraft-libvm",

  integrations: [
    starlight({
      title: "PotionCraft Library",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/SunsetFi/potioncraft-libvm",
        },
      ],
      sidebar: [
        {
          label: "Tags",
          items: getTagSidebarItems(),
          collapsed: true,
        },
        {
          label: "Effects",
          link: "/effects",
        },
        {
          label: "Ingredients",
          link: "/ingredients",
        },
        {
          label: "Salts",
          link: "/salts",
        },
      ],
      customCss: ["./src/styles/root.css", "./src/styles/attr-page.css"],
      components: {
        Head: "./src/components/overrides/Head.astro",
        Footer: "./src/components/overrides/Footer.astro",
      },
      expressiveCode: {
        themes: ["github-light", "github-dark"],
      },
    }),
  ],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Caveat",
      cssVariable: "--font-caveat",
    },
    {
      provider: fontProviders.google(),
      name: "Edu SA Beginner",
      cssVariable: "--font-edu-sa-beginner",
    },
    {
      provider: fontProviders.google(),
      name: "Sofia",
      cssVariable: "--font-sofia",
    },
  ],
});
