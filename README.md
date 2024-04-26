# stack-tutorial

SvelteKit app for tutorials in the Stack programming language

## How to add or edit contents

To add or edit contents of this tutorial, do like below;

1. Add a directory in contents/article. The directory’s name become a path to the content’s URL.
2. Create a .stk file in which a sample code is written. The code is displayed in the online execution environment on the right side of the tutorial. The file name does not matter, as long as the file extension is .stk .
3. Create a .md file containing the content of the tutorial. Write a Front Matter at the beginning of the file. Items are as follows;

   - title: title of the article
   - next: name of the directory where the next article is written. If there is no next article, write null.

4. Put files created in step 2 and 3 in the directory created in step 1.

## Running locally

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of this app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
