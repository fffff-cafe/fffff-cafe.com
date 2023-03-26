import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const Link: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: "white", margin: "0.25rem" }}
    >
      {children}
    </a>
  )
}

const ContactSection = (): ReactElement => {
  return (
    <>
      <Section style={{ textAlign: "center" }}>
        <SectionTitle>お問い合わせ</SectionTitle>
        <div>
          <Link href="//twitter.com/fffff_cafe">Twitter</Link>
          のDMからご連絡ください。
        </div>
        <div>
          イベントの連絡については
          <Link href="//join.slack.com/t/fffff-81d6773/shared_invite/zt-1d2ozux7o-F2O5pNC5vmXzt1Allox2xQ">
            こちらのSlack
          </Link>
          からも受け付けています。
        </div>
      </Section>
    </>
  )
}

export default ContactSection
