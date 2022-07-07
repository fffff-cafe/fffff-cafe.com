import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const ContactSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>お問い合わせ</SectionTitle>
        <p style={{ textAlign: "center" }}>
          <a
            style={{ color: "white", margin: "0.25rem" }}
            href="//twitter.com/fffff_cafe"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          のDMからご連絡ください。
        </p>
      </Section>
    </>
  )
}

export default ContactSection
