"use client"

import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const MemberSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>メンバー</SectionTitle>
        <p style={{ textAlign: "center" }}>運営メンバーについて</p>
        <div
          style={{
            backgroundColor: "#111",
            borderRadius: "3px",
            border: "solid 1px white",
            boxShadow: "3px 3px 3px #222",
            margin: ".5rem auto",
            maxWidth: "600px",
            padding: "1rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#111"
          }}
        >
          <p>
            <a
              href="//kixixixixi.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
              }}
            >
              @kixixixixi
            </a>
          </p>
          <p>
            Reload, Inc. の代表 / Webエンジニア / Typescriptが好き
            <br />
            JavaScript, Perl, Python, Ruby, Elixir, Swift, Kotlin, Nim
          </p>
          <p>
            <a
              href="//twitter.com/kixixixixi"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                display: "inline-block",
                margin: "0 .25rem",
              }}
            >
              Twitter
            </a>
            <a
              href="//github.com/kixixixixi"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                display: "inline-block",
                margin: "0 .25rem",
              }}
            >
              GitHub
            </a>
          </p>
        </div>
      </Section>
    </>
  )
}

export default MemberSection
