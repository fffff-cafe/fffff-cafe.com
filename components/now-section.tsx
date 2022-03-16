import React, { ReactElement } from "react"
import Script from "next/script"
import Styled from "styled-components"
import { Section, SectionTitle } from "components/elements"

const TweetSection = Styled.div`
height: 600px;
margin: auto;
max-width: min(100%, 480px);
overflow: scroll;
`

const NowSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>最新情報</SectionTitle>
        <TweetSection>
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/fffff_cafe?ref_src=twsrc%5Etfw"
          >
            Tweets by fffff_cafe
          </a>
          <Script
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </TweetSection>
      </Section>
    </>
  )
}

export default NowSection
