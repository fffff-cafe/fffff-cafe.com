import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import { ExternalLink } from "components/elements/link"

const ContactSection = (): ReactElement => {
  return (
    <>
      <Section style={{ textAlign: "center" }}>
        <SectionTitle>お問い合わせ</SectionTitle>
        <div>
          <ExternalLink href="//twitter.com/fffff_cafe">Twitter</ExternalLink>
          のDMからご連絡ください。
        </div>
        <div>
          イベントの連絡については
          <ExternalLink href="//join.slack.com/t/fffff-81d6773/shared_invite/zt-1d2ozux7o-F2O5pNC5vmXzt1Allox2xQ">
            こちらのSlack
          </ExternalLink>
          からも受け付けています。
        </div>
      </Section>
    </>
  )
}

export default ContactSection
