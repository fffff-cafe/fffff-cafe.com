import React, { ReactElement } from "react"

import { Section, SectionTitle } from "components/elements"

const AccessSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle id="access">アクセス</SectionTitle>
        <p style={{ textAlign: "center" }}>
          東京都千代田区神田佐久間町3-37-1 山茂登ビル3F
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0769926028181!2d139.7681477292236!3d35.694038298761974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfc0ee3f1df%3A0x1c3b10dcfccc957b!2sFFFFF%20Cafe!5e0!3m2!1sja!2sjp!4v1647426190796!5m2!1sja!2sjp"
          width="600"
          height="450"
          style={{ border: 0, maxHeight: "66vh", maxWidth: "min(960px, 100%)" }}
          allowFullScreen={true}
          loading="lazy"
          title="google map"
        ></iframe>
      </Section>
    </>
  )
}

export default AccessSection
