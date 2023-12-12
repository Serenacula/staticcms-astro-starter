import { z } from "astro/zod"
import { defineCollection } from "astro:content"
import type { TemplatePreviewProps } from "@staticcms/core";

interface Item {
    title: string
}

// Preview Component
export function HomePreview({ entry }: TemplatePreviewProps<Item>) {
    return <>
        <h1>{entry.data?.title}ojojoj</h1>
        <p>test!</p>
    </>
}

// Type declaration for astro's content folder
export const homeCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
    })
})

// StaticCMS config
export const themeConfig = {
    name: "themeConfig",
    label: "Theme",
    files: [
        {
            name: "theme",
            label: "Theme",
            file: "/src/content/theme/theme.mdx",
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