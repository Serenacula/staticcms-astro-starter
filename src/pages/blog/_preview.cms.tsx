import { useMediaAsset, type TemplatePreviewProps } from "@staticcms/core";
import { marked } from "marked";
import { useMemo } from "react";


interface Item {
    title: string
    creationDate: Date
    description: string
    altText?: string
    image?: string
    body: string
}


// Preview Component

export function BlogPreview({ entry, collection, fields }: TemplatePreviewProps<Item>) {

    if (!entry.data) {
        return <></>
    }
    const time = new Date(entry.data.creationDate).toLocaleDateString()

    const imageField = useMemo(() => fields.find(field => field.name === 'image'), [fields]);
    const imageUrl = useMediaAsset(entry.data.image, collection, imageField, entry);
    return <>
        <main style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
        }}>
            <h1>{entry.data?.title}</h1>
            <p><i>{`${time}`}</i></p>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem"
            }}>
                <div dangerouslySetInnerHTML={{ __html: marked(entry.data.body ?? "") }}>

                </div>
                <div style={{
                    width: "50%",
                    paddingLeft: "2rem",
                    borderLeft: "1px solid black"
                }}>
                    <img
                        src={imageUrl}
                        alt={entry.data.altText || entry.data.title}
                        title={entry.data.altText || entry.data.title}
                    />
                </div>
            </div>
        </main>
    </>
}