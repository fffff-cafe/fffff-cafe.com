import { ReactElement } from "react"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Section, SectionTitle } from "components/elements"
import { Metadata } from "next"
import dayjs from "dayjs"

interface ArticleListItem {
  id: string
  title: string
  date: string
}

async function getArticlesList(): Promise<ArticleListItem[]> {
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

export const metadata: Metadata = {
  title: "記事一覧 | FFFFF Cafe",
  description: "FFFFF Cafeの記事一覧ページ",
}

const ArticlesPage = async (): Promise<ReactElement> => {
  const articles = await getArticlesList()

  return (
    <>
      <Section
        style={{
          textAlign: "left",
          maxWidth: "800px",
          margin: "0 auto",
          paddingTop: "5rem",
        }}
      >
        <SectionTitle>記事一覧</SectionTitle>
        {articles.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ccc" }}>記事がありません</p>
        ) : (
          <div>
            {articles.map((article) => (
              <div
                key={article.id}
                style={{
                  borderBottom: "1px solid #444",
                  paddingBottom: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Link
                  href={`/articles/${article.id}`}
                  style={{
                    color: "#f0f0f0",
                    textDecoration: "none",
                    display: "block",
                    padding: "0.5rem 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      margin: "0 0 0.5rem 0",
                      color: "#f0f0f0",
                    }}
                  >
                    {article.title}
                  </h3>
                  {article.date && (
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "0.9rem",
                        margin: 0,
                      }}
                    >
                      {dayjs(article.date).format("YYYY年MM月DD日")}
                    </p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}

export default ArticlesPage
