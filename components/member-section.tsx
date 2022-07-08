import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"
const MemberCard = Styled.div`
  background-color: #111;
  border-radius: 3px;
  border: solid 1px white;
  box-shadow: 3px 3px 3px #222;
  margin: .5rem auto;
  max-width: 600px;
  padding: 1rem;

  &:hover {
    background-color: #333;
  }

  a {
    color: white;
  }

  .links {
    a {
      display: inline-block;
      margin: 0 .25rem;
    }
  }
`

const MemberSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>メンバー</SectionTitle>
        <p style={{ textAlign: "center" }}>運営メンバーについて</p>
        <MemberCard>
          <p>
            <a href="//kixixixixi.com" target="_blank" rel="noreferrer">
              @kixixixixi
            </a>
          </p>
          <p>
            Reload, Inc. の代表 / Webエンジニア / Typescriptが好き
            <br />
            JavaScript, Perl, Python, Ruby, Elixir, Swift, Kotlin, Nim
          </p>
          <p className="links">
            <a href="//twitter.com/kixixixixi" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="//github.com/kixixixixi" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </MemberCard>
        <MemberCard>
          <p>
            <u>@hanamizuno</u>
          </p>
          <p>
            フリーのソフトウェアエンジニア・編集者。登山や旅行、散歩が趣味。
            <br />
            好きな言語はPythonとElixir。
          </p>
          <p className="links">
            <a
              href="//twitter.com/hanamizuno_"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a href="//github.com/hanamizuno" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </MemberCard>
      </Section>
    </>
  )
}

export default MemberSection
