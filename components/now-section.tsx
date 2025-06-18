import React, { ReactElement } from "react"
import Script from "next/script"
import { Section, SectionTitle } from "components/elements"

const NowSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>最新情報</SectionTitle>
        <div
          style={{
            height: "600px",
            margin: "auto",
            maxWidth: "min(100%, 480px)",
            overflow: "scroll",
          }}
        >
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
        </div>
      </Section>
    </>
  )
}

export default NowSection
