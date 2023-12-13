import { z } from "astro/zod"
import { defineCollection } from "astro:content"
import { useMediaAsset, type TemplatePreviewProps } from "@staticcms/core";
import { marked } from "marked";
import { useMemo } from "react";

interface Item {
    title: string
    creationDate: Date
    description: string
    imageAlt: string
    image: string
    body: string
}

// Preview Component
export function BlogPreview({ entry, collection, fields }: TemplatePreviewProps<Item>) {
    const time = new Date(entry.data?.creationDate!).toLocaleDateString()

    const imageField = useMemo(() => fields.find(field => field.name === 'image'), [fields]);
    const imageUrl = useMediaAsset(entry.data?.image, collection, imageField, entry);
    return <>
        <main>
            <h1>{entry.data?.title}</h1>
            <p><i>{`${time}`}</i></p>

            <div>
                <div dangerouslySetInnerHTML={{ __html: marked(entry.data?.body ?? "") }}>

                </div>
                <div>
                    <img
                        src={imageUrl}
                        alt={entry.data?.imageAlt || entry.data?.title}
                    />
                </div>
            </div>
        </main>
    </>
}

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
            widget: "image"
        },
        {
            name: "image",
            required: false,
            label: "Image",
            widget: "image"
        }
    ]
}