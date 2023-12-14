import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: "https://localhost:4321",
    integrations: [
        react({
            exclude: "src/**/*.cms.tsx",
        }),
    ],
})
