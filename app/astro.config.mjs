// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import { visit } from "unist-util-visit";

// https://astro.build/config
export default defineConfig({
  site: "https://sunsetfi.github.io",
  base: "/potioncraft-libvm",

  markdown: {
    remarkPlugins: [remarkRebaseLinks("/potioncraft-libvm")],
  },

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
          label: "Alchemy Machine",
          items: [
            {
              label: "Overview",
              link: "/alchemy-machine",
            },
            { label: "Reagents", link: "/reagents" },
            { label: "Recipes", link: "/alchemy-machine-recipes" },
          ],
        },
        {
          label: "Tags",
          link: "/tags",
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
      customCss: [
        "./src/styles/layers.css",
        "./src/styles/root.css",
        "./src/styles/attr-page.css",
        "./src/styles/detail.css",
      ],
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

function remarkRebaseLinks(base) {
  return () => (tree) => {
    visit(tree, "link", (node) => {
      if (
        node.url.startsWith("/") &&
        !node.url.startsWith("//") &&
        !node.url.startsWith(base)
      ) {
        node.url = base + node.url;
      }
    });
  };
}
