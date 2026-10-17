import React, { ReactElement } from "react"
import { ButtonLink, Section, SectionTitle } from "components/elements"
import ArticleCard from "components/elements/article-card"
import { ArticleListItem } from "utils/articles"
import { twitterUrl } from "utils/info"

interface NowSectionProps {
  latestArticles: ArticleListItem[]
}

const NowSection = ({ latestArticles }: NowSectionProps): ReactElement => {
  return (
    <Section id="news">
      <SectionTitle label="News & reports">お知らせ・レポート</SectionTitle>
      {latestArticles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
        <ButtonLink href="/articles" variant="ink">
          記事一覧
        </ButtonLink>
        <ButtonLink href={twitterUrl} variant="outline">
          X（Twitter）の最新投稿
        </ButtonLink>
      </div>
    </Section>
  )
}

export default NowSection
