import { generalCollection } from "../layouts/generalConfig.cms"
import { themeCollection } from "../layouts/themeConfig.cms"
import { homeCollection } from "../pages/_home.cms"
import { blogCollection } from "../pages/blog/_blog.cms"

export const collections = {
    "general": generalCollection,
    "theme": themeCollection,
    "home": homeCollection,
    "blog": blogCollection,
}
