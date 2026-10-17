import React, { ReactElement } from "react"
import Link from "next/link"
import dayjs from "dayjs"
import { inkColorHex, monoFontFamily } from "utils/constant"

interface ArticleCardProps {
  id: string
  title: string
  date: string
}

const ArticleCard = ({ id, title, date }: ArticleCardProps): ReactElement => {
  return (
    <article style={{ borderBottom: `1px solid ${inkColorHex}` }}>
      <Link
        href={`/articles/${id}`}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: ".25rem 1.5rem",
          padding: "1.1rem 0",
          textDecoration: "none",
        }}
      >
        {date && (
          <time
            dateTime={dayjs(date).format("YYYY-MM-DD")}
            style={{ fontFamily: monoFontFamily, fontWeight: 700, minWidth: "7em" }}
          >
            {dayjs(date).format("YYYY.MM.DD")}
          </time>
        )}
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, textDecoration: "underline" }}>
          {title}
        </h3>
      </Link>
    </article>
  )
}

export default ArticleCard
