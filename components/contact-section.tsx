import React, { ReactElement } from "react"
import { ButtonLink, Section, SectionTitle } from "components/elements"
import { slackUrl, twitterUrl } from "utils/info"

const ContactSection = (): ReactElement => {
  return (
    <Section id="contact" dark>
      <SectionTitle label="Contact">お問い合わせ</SectionTitle>
      <p>ご利用・貸切のご相談は X（Twitter）のDMからご連絡ください。</p>
      <p>イベントに関する連絡は Slack でも受け付けています。</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
        <ButtonLink href={twitterUrl}>X（Twitter）でDMする</ButtonLink>
        <ButtonLink href={slackUrl} variant="outline">
          Slackに参加する
        </ButtonLink>
      </div>
    </Section>
  )
}

export default ContactSection
