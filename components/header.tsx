import React, { ReactElement } from "react"
import { primaryColorHex } from "utils/constant"
import Styled from "styled-components"
import ScrollIntoView from "react-scroll-into-view"

const Header = Styled.header`
  background-color: ${primaryColorHex};
  box-sizing: border-box;
  color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  h1 {
    font-size: 1rem;
    margin: 0;
  }
  ul {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    padding: 0 1rem;
    width: 100%;
    li {
      list-style: none;
      a {
        color: #eee;
        text-decoration: none;
      }
    }
  }
`

const HeaderSection = (): ReactElement => {
  return (
    <>
      <Header>
        <h1>FFFFF Cafe</h1>
        <nav>
          <ul>
            <li>
              <ScrollIntoView selector="#calendar">
                <>カレンダー</>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#access">
                <>アクセス</>
              </ScrollIntoView>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  )
}

export default HeaderSection
