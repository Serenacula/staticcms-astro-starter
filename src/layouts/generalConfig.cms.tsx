import type { TemplatePreviewProps } from "@staticcms/core";
import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";



interface Item {
    logoText: string
}

export function GeneralPreview({ entry }: TemplatePreviewProps<Item>) {
    return <>
        <h1>{entry.data?.logoText}ojojoj</h1>
        <p>test!</p>
    </>
}

// Astro type definition

export const generalCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        favicon: z.string(),
    }),
});

//   StaticCMS config

export const generalConfig = {
    name: "generalConfig",
    label: "General",
    files: [
        {
            name: "general",
            label: "General",
            file: "/src/content/general/general.mdx",
            fields: [
                {
                    name: "title",
                    label: "Site Title",
                    hint: "used in tab name",
                    widget: "string"
                },
                {
                    name: "description",
                    label: "Site Description",
                    hint: "used by search engines",
                    widget: "string"
                },
                {
                    name: "favicon",
                    label: "Favicon",
                    widget: "image",
                },
            ],
        },
    ]
}