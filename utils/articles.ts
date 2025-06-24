import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

export interface ArticleListItem {
  id: string
  title: string
  date: string
}

export async function getArticlesList(): Promise<ArticleListItem[]> {
  try {
    const articlesDirectory = path.join(process.cwd(), "articles")
    const filenames = await fs.readdir(articlesDirectory)

    const articles = await Promise.all(
      filenames
        .filter((filename) => filename.endsWith(".md"))
        .map(async (filename) => {
          const id = filename.replace(/\.md$/, "")
          const fullPath = path.join(articlesDirectory, filename)
          const fileContents = await fs.readFile(fullPath, "utf8")
          const matterResult = matter(fileContents)

          return {
            id,
            title: matterResult.data.title || id,
            date: matterResult.data.date || "",
          }
        })
    )

    return articles.sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    console.error("Error getting articles list:", error)
    return []
  }
}

export async function getLatestArticles(limit: number = 3): Promise<ArticleListItem[]> {
  const articles = await getArticlesList()
  return articles.slice(0, limit)
}