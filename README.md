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
- [ ]: Customer request pages
  - [ ]: Auto-link customer requests to recipes based on effect tiers.
- [ ]: Wiki-style pages for brewing techniques?

## Using this Repository

This repository uses [Git Large File Storage](https://git-lfs.com/) to store some files.  This needs to be installed before this repository will function correctly.

1. Download Git LFS from https://git-lfs.com/
2. Install Git LFS based on your OS
3. Run `git lfs install` in your terminal.

## Running Libvm locally

1. `pnpm install --frozen-lockfile`
1. `pnpm dev`

The website should now be running on [http://localhost:4321/potioncraft-libvm](http://localhost:4321/potioncraft-libvm).

## Synchronizing with the Alchemist's Tome

