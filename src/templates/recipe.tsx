import React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";

type DataProps = {
  sitePage: {
    id: string;
    pageContext: {
      title: string;
    };
  };
};
function RecipeTemplate({
  data: {
    sitePage: { pageContext: recipe },
  },
}: PageProps<DataProps>) {
  return (
    <div>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>
      <pre>{recipe.title}</pre>
    </div>
  );
}

export default RecipeTemplate;
export const pageQuery = graphql`
  query MyQuery {
    sitePage {
      id
      pageContext
    }
  }
`;
