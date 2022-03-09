import React, { ReactElement } from "react"
import { primaryColorHex } from "utils/constant"
import Styled from "styled-components"

const Header = Styled.header`
  background-color: ${primaryColorHex};
  color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
              <a href="/">アクセス</a>
            </li>
            <li>
              <a href="/">カレンダー</a>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  )
}

export default HeaderSection
