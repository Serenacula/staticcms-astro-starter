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
    if (!entry.data) {
        return <></>
    }
    return <>
        <div style={{
            fontSize: "1.5rem",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            backgroundColor: entry.data.background,
            maxWidth: "100%",
            maxHeight: "100%",
            margin: 0,
            padding: "100px"
        }}>
            <p style={{ color: entry.data.text }}>sample text</p>
            <a style={{ color: entry.data.link }} href="">link</a>
        </div>
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