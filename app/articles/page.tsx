import { ReactElement } from "react"
import { Metadata } from "next"
import { PageHeader, Section } from "components/elements"
import ArticleCard from "components/elements/article-card"
import { getArticlesList } from "utils/articles"

export const metadata: Metadata = {
  title: "お知らせ・イベントレポート",
  description:
    "秋葉原の作業できるカフェ FFFFF Cafe のお知らせとイベントレポート一覧。",
  alternates: { canonical: "/articles" },
  openGraph: { url: "/articles" },
}

const ArticlesPage = async (): Promise<ReactElement> => {
  const articles = await getArticlesList()

  return (
    <>
      <PageHeader label="NEWS & REPORTS" title="お知らせ・レポート" />
      <Section>
        {articles.length === 0 ? (
          <p>記事がまだありません</p>
        ) : (
          articles.map((article) => <ArticleCard key={article.id} {...article} />)
        )}
      </Section>
    </>
  )
}

export default ArticlesPage
