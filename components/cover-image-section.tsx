import React, { ReactElement } from "react"
import Styled from "styled-components"

const CoverBackground = Styled.div`
background-image: url(/images/cover.jpg);
background-size: cover;
background-position: center;
display: flex;
height: 50vh;
width: 100%;
`

const CoverContainer = Styled.div`
background-color: rgba(0, 0, 0, 0.666);
display: flex;
flex-direction: row;
justify-content: center;
height: 100%;
position: relative;
width: 100%;
`

const CoverContent = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
max-width: 640px;
position: relative;
width: 100%;
`

const CoverTitle = Styled.section`
box-sizing: border-box;
color: #eee;
height: 33%;
line-height: 1.5;
padding: 1rem;
position: absolute;
text-align: center;
width: 100%;
h1 {
  font-size: 2.5rem;
  line-height: 1.5;
}
`

const CoverImageSection = (): ReactElement => {
  return (
    <>
      <CoverBackground>
        <CoverContainer>
          <CoverContent>
            <CoverTitle>
              <h1>FFFFF Cafe</h1>
              <p>仕事をしやすく、それでいて遊びやすいような場所</p>
            </CoverTitle>
          </CoverContent>
        </CoverContainer>
      </CoverBackground>
    </>
  )
}

export default CoverImageSection
