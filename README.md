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

## Synchronizing with the Alchemist's Tome

