import type { TemplatePreviewProps } from "@staticcms/core"

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