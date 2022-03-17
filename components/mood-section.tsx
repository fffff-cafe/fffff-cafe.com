import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"

const PhotoGrid = Styled.div`
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin: auto;
max-width: 640px;

.item {
  aspect-ratio: 1;
  background-image: url(https://lh3.googleusercontent.com/p/AF1QipOCPxXXplJ4hFEnmGz-J43yxlZxeh1AhxpJUtIz=w960-h960-n-o-v1);
  background-position: center;
  background-size: cover;
  width: min(33%, 33vw);
  &:not(:hover)::after {
    background-color: rgba(0, 0, 0, 0.3);
    content: "";
    display: block;
    height: 100%;
    width: 100%;
  }
}
`

const photos = Array(12).fill(undefined)

const MoodSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>写真</SectionTitle>
        <PhotoGrid>
          {photos.map((_, i) => (
            <div key={i} className="item"></div>
          ))}
        </PhotoGrid>
      </Section>
    </>
  )
}

export default MoodSection
