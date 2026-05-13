import type { CollectionEntry } from "astro:content";
import type { IngredientCountRecord } from "../../ingredients/types/IngredientCountRecord";
import type { SaltCountRecord } from "../../salts/types/SaltCountRecord";
import type { RecipeId } from "./RecipeId";
import type { Merge } from "type-fest";
import type { ItemTags } from "../../tags/types/ItemTags";

export type RecipeEntry = Merge<
  CollectionEntry<"recipes">,
  {
    id: RecipeId;
    data: Merge<
      CollectionEntry<"recipes">["data"],
      {
        id: RecipeId;
        ingredients: IngredientCountRecord;
        salts: SaltCountRecord;
        tags: ItemTags;
      }
    >;
  }
>;
