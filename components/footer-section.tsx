import React, { ReactElement } from "react"
import Styled from "styled-components"

const Footer = Styled.footer`
background: #444;
color: #f0f0f0;
padding: 4rem 0;
text-align: center;

p {
  margin-bottom: .5rem;
  a {
    color: #d0d0d0;
    text-decoration: none;
  }
}
`

const FooterSection = (): ReactElement => {
  return (
    <>
      <Footer>
        <section>
          <p>FFFFF Cafe &copy; 2022</p>
          <p>
            <small>
              Powered by &nbsp;
              <a href="//reload.co.jp" target="_blank" rel="noreferrer">
                Reload, Inc.
              </a>
            </small>
          </p>
        </section>
      </Footer>
    </>
  )
}

export default FooterSection
