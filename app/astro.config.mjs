// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { getIngredientSidebarItems } from "./config/sidebar/ingredients";
import { getEffectSidebarItems } from "./config/sidebar/effects";
import { getTagSidebarItems } from "./config/sidebar/tags";

// https://astro.build/config
export default defineConfig({
  site: "https://sunsetfi.github.io",
  base: "/potioncraft-libvm",

  integrations: [
    starlight({
      title: "PotionCraft Library",
      customCss: ["./src/styles.css"],
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
        },
        {
          label: "Effects",
          items: getEffectSidebarItems(),
        },
        {
          label: "Ingredients",
          items: getIngredientSidebarItems(),
        },
      ],
    }),
  ],
});
