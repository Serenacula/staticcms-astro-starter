import { z } from "astro/zod"
import { defineCollection } from "astro:content"
import type { TemplatePreviewProps } from "@staticcms/core";

// Preview Component


interface Item {
    background: string
    text: string
    link: string
}

export function ThemePreview({ entry }: TemplatePreviewProps<Item>) {
    return <>
        <h1>{entry.data?.text}</h1>
        <p>test!</p>
    </>
}

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
            file: "/src/content/theme/theme.mdx",
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