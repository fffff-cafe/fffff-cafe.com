import React, { ReactElement, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"
import LightBox from "react-image-lightbox"
import "react-image-lightbox/style.css"

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
  background-position: center;
  background-size: cover;
  cursor: pointer;
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

const photos = Array(9)
  .fill(null)
  .map((_, i) => `/images/photo_${i + 1}.jpg`)

const MoodSection = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageIndex, setImageIndex] = useState<number>(0)
  const openModal = (index: number) => {
    setIsOpen(true)
    setImageIndex(index)
  }
  return (
    <>
      <Section>
        <SectionTitle>写真</SectionTitle>
        <PhotoGrid>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="item"
              onClick={() => openModal(i)}
              role="button"
              tabIndex={i}
              aria-hidden="true"
              style={{ backgroundImage: `url("${photo}")` }}
            ></div>
          ))}
        </PhotoGrid>
      </Section>
      {isOpen && (
        <LightBox
          mainSrc={photos[imageIndex]}
          nextSrc={photos[(imageIndex + 1) % photos.length]}
          prevSrc={photos[(imageIndex + photos.length - 1) % photos.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex((imageIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % photos.length)
          }
        />
      )}
    </>
  )
}

export default MoodSection
