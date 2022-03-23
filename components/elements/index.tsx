import Styled from "styled-components"
import { sectionBackgroundColorHex } from "utils/constant"

export const SectionTitle = Styled.h2`
  border-bottom: solid 2px #f0f0f0;
  color: #f0f0f0;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 1rem .75rem 1.5rem;
  padding-bottom: .25rem;
`
export const Section = Styled.section`
  background: ${sectionBackgroundColorHex};
  box-sizing: border-box;
  color: #f0f0f0;
  line-height: 1.5;
  padding: 2rem 1rem;
  text-align: center;
  iframe {
    display: block;
    margin: auto;
    max-height: 66vh;
    max-width: min(600px, 100%);
  }
  p {
    margin: auto;
    max-width: 640px;
    text-align: left;
  }
`
