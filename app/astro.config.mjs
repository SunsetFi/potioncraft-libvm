// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { site, base } from "./config/site";
import { getIngredientSidebarItems } from "./config/sidebar/ingredients";
import { getEffectSidebarItems } from "./config/sidebar/effects";

// https://astro.build/config
export default defineConfig({
  site,
  base,
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
