import React, { ReactElement } from "react"
import Styled from "styled-components"

const CoverBackground = Styled.div`
background-image: url(/images/cover.jpg);
background-size: cover;
background-position: center;
height: 50vh;
width: 100%;
`

const CoverContent = Styled.div`
background-color: rgba(0, 0, 0, 0.666);
height: 100%;
position: relative;
width: 100%;
`

const CoverTitle = Styled.section`
color: #eee;
height: 100%;
margin: 0;
padding-top: 50%;
position: absolute;
text-align: center;
width: 100%;
h1 {
  line-height: 1.5;
}
`

const CoverImageSection = (): ReactElement => {
  return (
    <>
      <CoverBackground>
        <CoverContent>
          <CoverTitle>
            <h1>FFFFF Cafe</h1>
            <p>神田にある作業ができるカフェ</p>
          </CoverTitle>
        </CoverContent>
      </CoverBackground>
    </>
  )
}

export default CoverImageSection
