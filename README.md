# Astro StaticCMS Starter

## Getting Started

To start the local git backend (only necessary for development):

```sh
yarn server
```

To start the dev server:

```sh
yarn dev
```

---

## Notes

This is a pretty simple overview of how to combine static and astro in a meaningful way. This is just the structure I prefer, but it showcases some of the usecases.

Static is set up to use Astro's content system, giving us easy access and typesafety.

React is used to build the preview elements, and marked is used to build the html from the body of the markdown files Static produces.

Setting `body` as the name tells markdown that this property should use the markdown body, rather than headmatter.

If you want components in the body text, you can use the `astro-auto-import` package.

---

## Troubleshooting

-   You cannot import from static core during astro's server side compile. Static uses browser-only APIs, and they will crash the compile.

    -   This means that to use all of the cool preview template features like image fetching in your react components, you'll need to keep the components in files SEPARATE from anything used by astro. Otherwise astro attempts to process them as it reads the file.
    -   If you see the error `CustomEvent is not defined`, that is because of this problem.

-   Mark .tsx files in pages with underscore to stop astro complaining.

-   React components will not work with static once processed by astro. You will need to exclude their files in astro.config.mjs
