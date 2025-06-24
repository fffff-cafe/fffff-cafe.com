import { ReactElement } from "react"
import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import { Section, SectionTitle } from "components/elements"
import { Metadata } from "next"
import { primaryColorHex } from "utils/constant"
import dayjs from "dayjs"

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

interface ArticleData {
  title: string
  date: string
  content: string
}

async function getArticleData(id: string): Promise<ArticleData | null> {
  try {
    const articlesDirectory = path.join(process.cwd(), "articles")
    const fullPath = path.join(articlesDirectory, `${id}.md`)
    const fileContents = await fs.readFile(fullPath, "utf8")

    const matterResult = matter(fileContents)
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      title: matterResult.data.title || id,
      date: matterResult.data.date || "",
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error processing article with ID ${id}:`, error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const articlesDirectory = path.join(process.cwd(), "articles")
    const filenames = await fs.readdir(articlesDirectory)

    return filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => ({
        id: filename.replace(/\.md$/, ""),
      }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params
  const articleData = await getArticleData(id)

  if (!articleData) {
    return {
      title: "記事が見つかりません",
    }
  }

  return {
    title: `${articleData.title} | FFFFF Cafe`,
    description: articleData.title,
  }
}

const ArticlesIdPage = async ({
  params,
}: ArticlePageProps): Promise<ReactElement> => {
  const { id } = await params
  const articleData = await getArticleData(id)

  if (!articleData) {
    notFound()
  }

  return (
    <>
      <Section
        style={{
          textAlign: "left",
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "5rem",
          minHeight: "100vh",
        }}
      >
        <nav style={{ marginBottom: "2rem" }}>
          <Link
            href="/articles"
            style={{
              color: "#f0f0f0",
              textDecoration: "none",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              padding: "0.4rem 0.8rem",
              background: primaryColorHex,
              borderRadius: "4px",
              transition: "all 0.3s ease",
              fontWeight: 500,
            }}
          >
            ← 記事一覧に戻る
          </Link>
        </nav>

        <article>
          <header style={{ marginBottom: "3rem", textAlign: "center" }}>
            <SectionTitle 
              style={{ 
                margin: "0 auto 1.5rem", 
                fontSize: "2.2rem",
                lineHeight: 1.3,
                textAlign: "center"
              }}
            >
              {articleData.title}
            </SectionTitle>
            {articleData.date && (
              <time
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  display: "block",
                  fontWeight: 400,
                }}
                dateTime={articleData.date}
              >
                {dayjs(articleData.date).format("YYYY年MM月DD日")}
              </time>
            )}
          </header>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              padding: "3rem",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              color: "#f0f0f0",
            }}
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
        </article>

        <nav style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link
            href="/articles"
            style={{
              color: "#f0f0f0",
              textDecoration: "none",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              padding: "0.6rem 1.5rem",
              background: primaryColorHex,
              borderRadius: "6px",
              transition: "all 0.3s ease",
              fontWeight: 500,
            }}
          >
            記事一覧に戻る
          </Link>
        </nav>
      </Section>
    </>
  )
}

export default ArticlesIdPage
