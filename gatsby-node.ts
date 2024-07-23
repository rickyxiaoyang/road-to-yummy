import path from "path";
import { CMSClient } from "./src/lib/api";
type Ingredient = {
  id: string;
  ingredient: string;
  quantity: number;
  unit: string; // TODO: replace with convert-units typing
};

type Recipe = {
  id: number;
  published: boolean;
  title: string;
  slug: string;
  date: string;
  description: string;
  ingredients: Ingredient[];
  directions: any;
  categories: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export const createPages = async ({ actions }: { actions: any }) => {
  const { createPage } = actions;
  // let { CMS_USERNAME, CMS_PASSWORD, CMS_URL } = process.env;
  // if (!CMS_USERNAME || !CMS_PASSWORD || !CMS_URL) {
  //   throw new Error("CMS_USERNAME, CMS_PASSWORD, and CMS_URL must be set");
  // }
  // const authResponse = await fetch(`${CMS_URL}/api/users/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({ email: CMS_USERNAME, password: CMS_PASSWORD }),
  // });
  // if (!authResponse.ok) {
  //   throw new Error(`Failed to authenticate: ${authResponse.statusText}`);
  // }
  // const authJSON = (await authResponse.json()) as { token: string };

  // console.log(`RXY ${authJSON.token}`);
  // const response = await fetch(`${process.env.CMS_URL}/api/recipes/`, {
  //   headers: {
  //     Authorization: `Bearer ${authJSON.token}`,
  //   },
  // });
  // if (!response.ok) {
  //   throw new Error(`Failed to fetch recipes: ${response.statusText}`);
  // }
  // const json = (await response.json()) as { docs: Recipe[] };

  const client = new CMSClient();
  const json = await client.get<{ docs: Recipe[] }>("/api/recipes");
  // const { docs: recipes } = (await response.json()) as { docs: Recipe[] };
  const template = path.resolve(`src/templates/recipe.tsx`);
  console.log(json.docs);
  const recipes = json.docs;
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
