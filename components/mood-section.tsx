import React, { ReactElement, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"
import Modal from "react-modal"

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

const photos = Array(12).fill(
  "https://lh3.googleusercontent.com/p/AF1QipOCPxXXplJ4hFEnmGz-J43yxlZxeh1AhxpJUtIz=w960-h960-n-o-v1"
)

const MoodSection = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalImageUrl, setModalImageUrl] = useState<string>("")
  const openModal = (photoUrl: string) => {
    setIsOpen(true)
    setModalImageUrl(photoUrl)
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
              onClick={() => openModal(photo)}
              role="button"
              tabIndex={i}
              aria-hidden="true"
              style={{ backgroundImage: `url("${photo}")` }}
            ></div>
          ))}
        </PhotoGrid>
      </Section>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            backgroundColor: "#000",
            padding: 0,
          },
        }}
      >
        <img
          src={modalImageUrl}
          alt="店舗画像"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
          }}
        />
      </Modal>
    </>
  )
}

export default MoodSection
