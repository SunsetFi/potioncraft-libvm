// @ts-check
import { defineConfig } from "astro/config";
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
          label: "Effects",
          link: "/effects",
        },
        {
          label: "Ingredients",
          link: "/ingredients",
        },
        {
          label: "Tags",
          items: getTagSidebarItems(),
          collapsed: true,
        },
      ],
      customCss: ["./src/styles.css"],
      expressiveCode: {
        themes: ["github-light", "github-dark"],
      },
    }),
  ],
});
