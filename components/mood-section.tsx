import React, { ReactElement, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import LightBox from "react-image-lightbox"
import "react-image-lightbox/style.css"

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
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            margin: "auto",
            maxWidth: "640px",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openModal(i)}
              role="button"
              tabIndex={i}
              aria-hidden="true"
              style={{
                aspectRatio: 1,
                backgroundImage: `url("${photo}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                cursor: "pointer",
                width: "min(33%, 33vw)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const after = e.target as HTMLElement
                after.style.setProperty("--hover", "1")
              }}
              onMouseLeave={(e) => {
                const after = e.target as HTMLElement
                after.style.setProperty("--hover", "0")
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: "var(--hover, 1)",
                  transition: "opacity 0.2s",
                }}
              />
            </div>
          ))}
        </div>
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
