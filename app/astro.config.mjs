// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { getIngredientSidebarItems } from "./config/sidebar/ingredients";
import { getEffectSidebarItems } from "./config/sidebar/effects";

// https://astro.build/config
export default defineConfig({
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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
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
