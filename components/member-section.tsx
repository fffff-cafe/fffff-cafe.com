import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import { inkColorHex } from "utils/constant"

const MemberSection = (): ReactElement => {
  return (
    <Section id="member">
      <SectionTitle label="Crew">運営メンバー</SectionTitle>
      <div
        style={{
          background: "#fff",
          border: `2px solid ${inkColorHex}`,
          maxWidth: "600px",
          padding: "1.5rem",
        }}
      >
        <h3 style={{ fontSize: "1.3rem" }}>
          <a href="https://kixixixixi.com" target="_blank" rel="noreferrer">
            @kixixixixi
          </a>
        </h3>
        <p style={{ margin: ".5rem 0" }}>
          Reload, Inc. の代表 / Webエンジニア / Typescriptが好き
          <br />
          JavaScript, Perl, Python, Ruby, Elixir, Swift, Kotlin, Nim
        </p>
        <p style={{ display: "flex", gap: "1rem" }}>
          <a href="https://twitter.com/kixixixixi" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://github.com/kixixixixi" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </Section>
  )
}

export default MemberSection
