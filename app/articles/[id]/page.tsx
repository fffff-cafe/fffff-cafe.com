import { ReactElement } from "react"
import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { ButtonLink, PageHeader, Section } from "components/elements"
import { Metadata } from "next"
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
    title: articleData.title,
    description: `${articleData.title} - 秋葉原の作業できるカフェ FFFFF Cafe のお知らせ・イベントレポート`,
    alternates: { canonical: `/articles/${id}` },
    openGraph: { type: "article", url: `/articles/${id}` },
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
    <article>
      <PageHeader
        label={articleData.date ? dayjs(articleData.date).format("YYYY.MM.DD") : "NEWS"}
        title={articleData.title}
      />
      <Section>
        <div
          className="article-body"
          style={{ fontSize: "1.05rem", maxWidth: "720px" }}
          dangerouslySetInnerHTML={{ __html: articleData.content }}
        />
        <nav style={{ marginTop: "3rem" }}>
          <ButtonLink href="/articles" variant="ink">
            記事一覧に戻る
          </ButtonLink>
        </nav>
      </Section>
    </article>
  )
}

export default ArticlesIdPage
