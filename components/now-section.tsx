"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import { Section, SectionTitle } from "components/elements"
import { ArticleListItem } from "utils/articles"
import { primaryColorHex } from "utils/constant"
import dayjs from "dayjs"

interface NowSectionProps {
  latestArticles: ArticleListItem[]
}

const NowSection = ({ latestArticles }: NowSectionProps): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>最新情報</SectionTitle>
        {latestArticles.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <h3
              style={{
                color: "#f0f0f0",
                fontSize: "1.2rem",
                marginBottom: "1.5rem",
                textAlign: "left",
                maxWidth: "480px",
                margin: "0 auto 1.5rem",
              }}
            >
              最新記事
            </h3>
            <div
              style={{
                maxWidth: "480px",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              {latestArticles.map((article) => (
                <div
                  key={article.id}
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                  }}
                >
                  <Link
                    href={`/articles/${article.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#f0f0f0",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        marginBottom: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </div>
                    {article.date && (
                      <div
                        style={{
                          color: "#aaa",
                          fontSize: "0.85rem",
                        }}
                      >
                        {dayjs(article.date).format("YYYY年MM月DD日")}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link
                href="/articles"
                style={{
                  color: primaryColorHex,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                記事一覧を見る →
              </Link>
            </div>
          </div>
        )}

        <div
          style={{
            margin: "auto",
            maxWidth: "min(100%, 480px)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="https://twitter.com/fffff_cafe"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#f0f0f0",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem 1rem",
                background: "#1da1f2",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              最新投稿を見る
            </Link>
          </div>
        </div>

        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Section>
    </>
  )
}

export default NowSection
