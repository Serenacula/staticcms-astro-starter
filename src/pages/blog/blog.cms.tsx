import { z } from "astro/zod"
import { defineCollection } from "astro:content"

import { marked } from "marked";
import { useMemo } from "react";





// Type declaration for astro's content folder
export const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        creationDate: z.date(),
        description: z.string(),
        imageAlt: z.string().optional(),
        image: z.string().optional()
    })
})

// StaticCMS config
export const blogConfig = {
    name: "blog",
    label: "Blog Posts",
    label_singular: "Post",
    create: true,
    folder: "/src/content/blog",
    fields: [
        {
            name: "title",
            label: "Title Text",
            widget: "string"
        },
        {
            name: "creationDate",
            label: "Creation Date",
            widget: "datetime"
        },
        {
            name: "description",
            label: "description",
            widget: "text"
        },
        {
            name: "body",
            label: "Main Text",
            widget: "markdown"
        },
        {
            name: "imageAlt",
            required: false,
            label: "Image Description",
            widget: "string"
        },
        {
            name: "image",
            required: false,
            label: "Image",
            widget: "image"
        }
    ]
}