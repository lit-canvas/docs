# Documentation site for Lit Canvas

## Quick start 

1. Install nodejs on your computer if you haven't already, following [this tutorial](https://nodejs.org/en/download)
2. Install dependencies by running `npm install` in the root directory
3. Start the development server by running `npm run dev`

## Update the documentation

The documentation files exist in the [`src/content`](src/content) directory. 

1. To create a new page, simply add a new mdx file in the `src/content` directory, and optionally modify the `_meta.js` in the corresponding directory to sort the pages (following the instructions [here](https://nextra.site/docs/guide/organize-files#_metajs)). 

## Dev Notes 

We use Nextra v4, which is still in its beta version at the point the project. It uses app based routing compared to page based routing. Some of this library's setup is based on [nextra's official documentation repo](https://github.com/shuding/nextra/blob/8793da79d43380b4a24b08c4d182f1b3eb559c04/docs/package.json#L22).