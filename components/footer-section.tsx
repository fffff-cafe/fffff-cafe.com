import React, { ReactElement } from "react"
import Styled from "styled-components"

const Footer = Styled.footer`
background: #444;
color: #f0f0f0;
padding: 4rem 0;
text-align: center;
`

const FooterSection = (): ReactElement => {
  return (
    <>
      <Footer>
        <section>
          <p>&copy; FFFFF Cafe</p>
        </section>
      </Footer>
    </>
  )
}

export default FooterSection
