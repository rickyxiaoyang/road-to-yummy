import React from "react";
import { Recipe } from "../../lib/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return <div>{recipe.title}</div>;
}
