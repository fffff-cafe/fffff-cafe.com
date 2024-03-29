import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const MenuSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>メニュー</SectionTitle>
        <iframe
          src="//reload-co-jp.github.io/cookban/"
          title="menu"
          width={900}
          height={600}
        ></iframe>
      </Section>
    </>
  )
}

export default MenuSection
