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
height: 50%;
margin: 0;
padding-top: 15%;
position: absolute;
text-align: center;
width: 100%;
`

const CoverImageSection = (): ReactElement => {
  return (
    <>
      <CoverBackground>
        <CoverContent>
          <CoverTitle>
            <h1>FFFFF Cafe</h1>
          </CoverTitle>
        </CoverContent>
      </CoverBackground>
    </>
  )
}

export default CoverImageSection
