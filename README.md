<h1 align="center">
  Road to Yummy
</h1>
<h3 align="center">
  But this time, powered by a CMS.
</h3>

### Key Points / Learnings

As I'm developing this app, I'll jot down useful notes for when I return to maintain this project.

#### Creating Pages

Currently, recipe pages are created at build time.

- Hits the API endpoint for the CMS for all pages
- For each record in the CMS, create a page. This is defined in `gatsby-node.ts` in the exported `createPages` fn.

To pass data to the component, `context` is used. This is so the query on the component knows which record to query for. For example:

- `siteId` is passed into context. This field allows us to make a graphql query on the `RecipeTemplate` (in `/src/templates`)
- the entire recipe object is passed to the component, so we can access it via the props

```js
function RecipeTemplate({
  data: { sitePage: { pageContext: recipe }},
}: PageProps<DataProps>) { ... }
```
