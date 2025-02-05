<h1 align="center">
  Road to Yummy
</h1>
<h3 align="center">
  But this time, powered by a CMS.
</h3>

### Motivation

When I previously built Road to Yummy, it was also built on gatsby but using markdown files to render pages. This was nice and simple to set up, but there were a few problems.

I found myself skipping the documentation process of a recipe when cooking. I felt there was too much friction in the process: I had to go into my codebase, add a new file, re-learn the markdown and frontmatter structure, and then write the recipe. On top of that, my wife didn't have an interface to write it.

This new version was going to be different: better tech, more user friendly, and will hopefully encourage me (and my wife!) to write down more of my recipes.

### Technical Architecture

- Gatsby / React
- Content Management System (Payload CMS)
- Tailwind for styling
- SlateJS for rich text formatting

### Key Points / Learnings

Whenever I'd return to the RTY project, I'd always forget the structure and have to relearn much of the framework.

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

### Deployments

I'm hosting my CMS privately, and will only be locally accessible. I will be looking to use GitHub's self hosted runners to deploy the pages.
