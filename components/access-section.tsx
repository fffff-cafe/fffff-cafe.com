import React, { ReactElement } from "react"

import Styled from "styled-components"
import { SectionTitle } from "components/elements"

const Access = Styled.section`
background: #666;
color: #f0f0f0;
padding: 2rem 0;
text-align: center;
iframe {
  display: block;
  margin: auto;
  max-width: min(600px, 100%);
}
`

const AccessSection = (): ReactElement => {
  return (
    <>
      <Access>
        <SectionTitle>アクセス</SectionTitle>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0769926028181!2d139.7681477292236!3d35.694038298761974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfc0ee3f1df%3A0x1c3b10dcfccc957b!2sFFFFF%20Cafe!5e0!3m2!1sja!2sjp!4v1647426190796!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="google map"
          ></iframe>
        </div>
      </Access>
    </>
  )
}

export default AccessSection
