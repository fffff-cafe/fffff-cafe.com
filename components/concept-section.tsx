import React, { ReactElement } from "react"
import Link from "next/link"
import { Section, SectionTitle, gridStyle } from "components/elements"
import { accentColorHex, inkColorHex, monoFontFamily } from "utils/constant"

const features = [
  {
    title: "ドロップインで作業",
    body: "1ドリンク500円から。ふらっと立ち寄れるドロップイン利用。",
    href: "/guide",
  },
  {
    title: "電源・Wi-Fi・モニター",
    body: "全席電源、Wi-Fi無料。モニター・充電ケーブル・ホワイトボードは無料で貸出（数量限定）。",
    href: "/guide#equipment",
  },
  {
    title: "もくもく会・勉強会",
    body: "もくもく会や勉強会を開催。ひとりで来ても、誰かと一緒に手を動かせる。",
    href: "/events",
  },
  {
    title: "イベント会場に",
    body: "LT会・勉強会・ワークショップ・交流会の会場として貸切で利用できる。",
    href: "/rental",
  },
]

const ConceptSection = (): ReactElement => {
  return (
    <Section id="features">
      <SectionTitle label="What we are">
        エンジニアが運営する、
        <br />
        仕事しやすく遊びやすい場所。
      </SectionTitle>
      <p style={{ marginBottom: "2rem", maxWidth: "40em" }}>
        株式会社リロードが運営する、全席電源・Wi-Fiを完備した作業できるカフェ。「仕事をしやすく、それでいて遊びやすいような場所」を目指し、秋葉原でITエンジニアたちが運営しています。
      </p>
      <ol style={{ ...gridStyle("230px"), listStyle: "none", padding: 0 }}>
        {features.map(({ title, body, href }, i) => (
          <li
            key={title}
            style={{
              background: "#fff",
              border: `2px solid ${inkColorHex}`,
              display: "flex",
              flexDirection: "column",
              padding: "1.25rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: monoFontFamily,
                fontSize: "2.5rem",
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              0{i + 1}
            </span>
            <h3
              style={{
                background: `linear-gradient(transparent 60%, ${accentColorHex} 60%)`,
                fontSize: "1.2rem",
                margin: "1rem 0 .5rem",
                width: "fit-content",
              }}
            >
              {title}
            </h3>
            <p style={{ flexGrow: 1, fontSize: ".95rem" }}>{body}</p>
            <Link href={href} style={{ fontWeight: 700, marginTop: "1rem" }}>
              詳しく見る →
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default ConceptSection
