import { z } from "astro/zod"
import { defineCollection } from "astro:content"


// Type declaration for astro's content folder

export const themeCollection = defineCollection({
    type: "content",
    schema: z.object({
        background: z.string(),
        text: z.string(),
        link: z.string(),
    })
})

export const themeConfig = {
    name: "themeConfig",
    label: "Theme",
    files: [
        {
            name: "theme",
            label: "Theme",
            file: "/src/content/theme/theme.md",
            fields: [
                {
                    name: "background",
                    label: "Background Colour",
                    widget: "color"
                },
                {
                    name: "text",
                    label: "Text Colour",
                    widget: "color"
                },
                {
                    name: "link",
                    label: "Links Colour",
                    widget: "color"
                },
            ]
        }
    ]
}