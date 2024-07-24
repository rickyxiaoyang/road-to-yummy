import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import RecipeList from "../components/recipes/RecipeList";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <RecipeList />
    </main>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Road to Yummy</title>;
