import { z } from "astro/zod"
import { defineCollection } from "astro:content"

// Type declaration for astro's content folder
export const homeCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
    })
})

// StaticCMS config
export const homeConfig = {
    name: "homeConfig",
    label: "Home",
    editor: {
        preview: false,
    },
    files: [
        {
            name: "home",
            label: "Home",
            file: "/src/content/home/home.md",
            fields: [
                {
                    name: "title",
                    label: "Title Text",
                    widget: "string"
                },
            ]
        }
    ]
}