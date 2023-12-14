import { z, defineCollection } from "astro:content"

// Astro type definition

export const generalCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        favicon: z.string(),
    }),
})

//   StaticCMS config

export const generalConfig = {
    name: "generalConfig",
    label: "General",
    editor: {
        preview: false,
    },
    files: [
        {
            name: "general",
            label: "General",
            file: "/src/content/general/general.md",
            fields: [
                {
                    name: "title",
                    label: "Site Title",
                    hint: "used in tab name",
                    widget: "string",
                },
                {
                    name: "description",
                    label: "Site Description",
                    hint: "used by search engines",
                    widget: "string",
                },
                {
                    name: "favicon",
                    label: "Favicon",
                    widget: "image",
                },
            ],
        },
    ],
}
