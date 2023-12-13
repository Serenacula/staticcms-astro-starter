# Astro Starter Kit: Minimal

Our dev environment

```sh
yarn server
```

## Notes

-   You cannot import from static core during astro's server rendering. Static uses browser-only APIs, and they will crash the compile.
    -   This means that if you want to use all of the preview template features in your react components, you'll need to keep them in files SEPARATE from anything used by astro. Otherwise astro attempts to process them as it reads the file.
