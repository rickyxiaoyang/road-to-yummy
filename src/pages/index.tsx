import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import RecipeList from "../components/recipes/RecipeList";
import PageContainer from "../components/shared/PageContainer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <PageContainer>
        <RecipeList />
      </PageContainer>
    </main>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Road to Yummy</title>;
