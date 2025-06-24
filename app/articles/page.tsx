import { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import ArticleCard from "components/elements/article-card"
import { Metadata } from "next"
import { getArticlesList } from "utils/articles"

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
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "5rem",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionTitle style={{ margin: "0 auto 1rem", fontSize: "2rem" }}>
            記事一覧
          </SectionTitle>
          <p style={{ color: "#ccc", fontSize: "1rem", margin: 0 }}>
            FFFFF Cafeの最新情報
          </p>
        </div>

        {articles.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p style={{ color: "#ccc", fontSize: "1.1rem", margin: 0 }}>
              記事がまだありません
            </p>
          </div>
        ) : (
          <div style={{ marginTop: "2rem" }}>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                date={article.date}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  )
}

export default ArticlesPage
