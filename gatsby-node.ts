import path from "path";
import { getRecipes } from "./src/lib/source-recipes";
export const createPages = async ({ actions }: { actions: any }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/recipe.tsx`);
  const recipes = await getRecipes();
  recipes.forEach((recipe) => {
    createPage({
      path: `${recipe.slug}`,
      component: template,
      context: {
        ...recipe,
      },
    });
  });
};
