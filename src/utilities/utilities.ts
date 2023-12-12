export function urlSafe(string: string) {
    const letters =
        string
            .split(" ")
            .join("-")
            .match(/[a-zA-Z0-9_-]/g) ?? []

    return letters.join("").toLowerCase()
}

export function stripString(string: string) {
    return string
        .split("/")
        .pop()
        ?.split(".")[0]
        ?.match(/[a-zA-Z0-9]/g)
        ?.join("")
        .toLowerCase()
}

export function getImage<I extends { src: string }>(
    images: I[],
    imageLocation: string
) {
    return images.find(
        (image) => stripString(image.src) === stripString(imageLocation)
    )
}

export function getItems<
    I extends { src: string },
    M extends { data: { image?: string | undefined } }
>(
    images: I[],
    collection: M[]
): {
    image: I
    markdown: M
}[] {
    const items = collection.map((markdown) => {
        const image = markdown.data.image
            ? getImage(images, markdown.data.image)
            : undefined
        if (!image) {
            return
        }
        return {
            image,
            markdown,
        }
    })
    const result: {
        image: I
        markdown: M
    }[] = []
    for (const item of items) {
        item && result.push(item)
    }

    return result
}
