import { CMSClient } from "./api";

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

export async function getRecipes(): Promise<Recipe[]> {
  const client = new CMSClient();
  const json = await client.get<{ docs: Recipe[] }>("/api/recipes");
  const recipes = json.docs;
  return recipes;
}
