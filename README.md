# PotionCraft Libvm

An experimental open-source wiki and record of Recipes.

The prototype is available [here](https://sunsetfi.github.io/potioncraft-libvm).

## TODO

### Now

- [ ]: Compute and add missing tags for ingredient types (organic, crystaline, ...)
- [ ]: Compute ingredient directions.
  How does the game do this?
  - [ ]: Index pages for ingredients based on type and direction.
- [ ]: Tags and tag recipes for ingredient type tags (organic, crystaline, ...)
- [ ]: Auto-generate and save images for effects to indicate their position on the map.
  Auto-generate a large image of the local area, with a minimap in the corner


### Later

- [ ]: Customer request pages.
  - [ ]: Auto-link customer requests to recipes based on effect tiers.
- [ ]: Wiki-style pages for brewing techniques?
- [ ]: Move name generation into tome sync code and out of build time.
- [ ]: Make icons for tags

## Using this Repository

This repository uses [Git Large File Storage](https://git-lfs.com/) to store some files.  This needs to be installed before this repository will function correctly.

1. Download Git LFS from https://git-lfs.com/
2. Install Git LFS based on your OS
3. Run `git lfs install` in your terminal.

Note that this repository has a small budget for GitHub LFS.  If you experence the warning `This repository exceeded its LFS budget`, then you need to wait until the next billing cycle for the budget to reset.  This usually will happen on the first of the month.

You may still be able to clone this repo by disabling git-lfs on your system.  However, the recipe preview images will not download, and will instead contain text markers of the actual file.  You still, however, will be able to run most of the site, and any pull requests made should still function without issue.

## Running Libvm locally

1. `pnpm install --frozen-lockfile`
1. `pnpm dev`

The website should now be running on [http://localhost:4321/potioncraft-libvm](http://localhost:4321/potioncraft-libvm).

## Development

This project uses the [Astro](https://astro.build/) static site framework, using the [Starlight](https://starlight.astro.build/) documentation system as a basis.

Anything can be extended, but there are a few crucial points:

### Defining Recipes

Create a folder under app/src/content/recipes/_ for your recipe.  Inside it, create two files:

index.md
```
---
name: [Your recipe name]
datastring: [The data query part of your Potionous plotter link (everything after ?data= ) ]
base: [Potion base]
effects:
  [Your Effect]: [Effect Strength]
  [Your Effect]: [Effect Strength]
ingredients:
  [Your Ingredient]: [Ingredient Count]
  [Your Ingredient]: [Ingredient Count]
salts:
  [Your salt]: [Grains count]
  [Your salt]: [Grains count]
cost: [Total cost]
stress: [Ingredient stress]
tags:
  - [Challenge tag]
  - [Challenge tag]
---

Your description here.  It may use Markdown
```

Effects, ingredients, salts, and tags MUST match their corresponding folder names under /app/src/content/\*/_\*/index.md

#### Auto-generating recipes from a datastring

TBD

### Adding custom wiki pages

Pages added to `app/src/content/docs/**` will be available as wiki pages:

my-doc.mdx
```
---
title: [Your page title]
description: [Your page description]
---

Your markdown content here
```

### Adding content to generated pages

The pages for the following topics are auto-generated:
- effects
- ingredients
- recipes
- salts
- tags (challenge tags)

To add content to any of them, find the corresponding markdown file under /app/src/content/\*/_/\*/index.md

If you want to add content that applies to all auto-generated pages, you can find the pages under /app/src/pages/*/:
- `index.astro - Auto-generated page for the top-level collection.
- `[slug].astro` - Auto-generated page for individual items

### Synchronizing with the Alchemist's Tome

TBD

