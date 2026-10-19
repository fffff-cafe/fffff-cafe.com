import React, { ReactElement } from "react"
import { ButtonLink } from "components/elements"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import { access, dropInPrice } from "utils/info"

const facts = [dropInPrice, "全席電源", "Wi-Fi無料", "モニター貸出", access]

const CoverImageSection = (): ReactElement => {
  return (
    <div
      style={{
        background: inkColorHex,
        color: paperColorHex,
        paddingTop: "6rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
          margin: "0 auto",
          maxWidth: "1080px",
          padding: "clamp(2rem, 6vw, 4rem) 1rem",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <p
            style={{
              background: accentColorHex,
              display: "inline-block",
              padding: ".15rem .5rem",
              fontFamily: monoFontFamily,
              fontSize: ".85rem",
              fontWeight: 700,
              letterSpacing: ".1em",
            }}
          >
            AKIHABARA / WORK &amp; PLAY SPACE
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 8vw, 4.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "1rem 0 1.5rem",
            }}
          >
            秋葉原の、
            <br />
            仕事も遊びも
            <br />
            できる
            <span
              style={{
                background: accentColorHex,
                color: paperColorHex,
                display: "inline-block",
                padding: "0 .15em",
                whiteSpace: "nowrap",
              }}
            >
              作業カフェ
            </span>
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "34em" }}>
            FFFFF Cafe は、ITエンジニアが運営する全席電源・Wi-Fi完備の作業できるカフェ。
            ドロップインでふらっと作業も、もくもく会や勉強会への参加も。
          </p>
          <ul
            aria-label="主な特徴"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".5rem",
              listStyle: "none",
              margin: "1.5rem 0 2rem",
              padding: 0,
            }}
          >
            {facts.map((fact) => (
              <li
                key={fact}
                style={{
                  border: `1px solid ${paperColorHex}`,
                  fontSize: ".85rem",
                  fontWeight: 700,
                  padding: ".25rem .6rem",
                }}
              >
                {fact}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <ButtonLink href="/guide">利用案内・料金</ButtonLink>
            <ButtonLink href="/events" variant="outline">
              イベント一覧
            </ButtonLink>
          </div>
        </div>
        <img
          src="/images/cover.jpg"
          alt="FFFFF Cafe の店内"
          width={1024}
          height={512}
          fetchPriority="high"
          style={{
            alignSelf: "center",
            aspectRatio: "4 / 3",
            border: `2px solid ${paperColorHex}`,
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
    </div>
  )
}

export default CoverImageSection
