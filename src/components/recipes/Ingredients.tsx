import React from "react";
import { Ingredient } from "../../lib/recipes";
import { toFraction } from "../../lib/utils";

export default function Ingredients({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2>Ingredients</h2>
        {ingredients.map((ingredient) => (
          <IngredientItem ingredient={ingredient} key={ingredient.id} />
        ))}
      </div>
    </div>
  );
}

function IngredientItem({ ingredient }: { ingredient: Ingredient }) {
  return (
    <div className="flex flex-row gap-2">
      <input type="checkbox" />
      {toFraction(ingredient.quantity)} {ingredient.unit}{" "}
      {ingredient.ingredient}
    </div>
  );
}
