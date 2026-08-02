"use client"

import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle } from "components/elements"

const photos = Array(9)
  .fill(null)
  .map((_, i) => `/images/photo_${i + 1}.jpg`)

type LightBoxProps = {
  mainSrc: string
  onClose: () => void
  onMovePrev: () => void
  onMoveNext: () => void
}

const LightBox = ({
  mainSrc,
  onClose,
  onMovePrev,
  onMoveNext,
}: LightBoxProps): ReactElement => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onMovePrev()
      if (e.key === "ArrowRight") onMoveNext()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onMovePrev, onMoveNext])

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 1100,
      }}
    >
      <img
        src={mainSrc}
        alt=""
        style={{
          maxHeight: "90vh",
          maxWidth: "90vw",
          objectFit: "contain",
        }}
      />
      <button
        type="button"
        aria-label="閉じる"
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "#f0f0f0",
          cursor: "pointer",
          fontSize: "2rem",
          lineHeight: 1,
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
      >
        ×
      </button>
      <button
        type="button"
        aria-label="前の写真"
        onClick={(e) => {
          e.stopPropagation()
          onMovePrev()
        }}
        style={{
          background: "none",
          border: "none",
          color: "#f0f0f0",
          cursor: "pointer",
          fontSize: "2rem",
          left: "1rem",
          lineHeight: 1,
          position: "absolute",
        }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="次の写真"
        onClick={(e) => {
          e.stopPropagation()
          onMoveNext()
        }}
        style={{
          background: "none",
          border: "none",
          color: "#f0f0f0",
          cursor: "pointer",
          fontSize: "2rem",
          lineHeight: 1,
          position: "absolute",
          right: "1rem",
        }}
      >
        ›
      </button>
    </div>
  )
}

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
          onClose={() => setIsOpen(false)}
          onMovePrev={() =>
            setImageIndex((imageIndex + photos.length - 1) % photos.length)
          }
          onMoveNext={() =>
            setImageIndex((imageIndex + 1) % photos.length)
          }
        />
      )}
    </>
  )
}

export default MoodSection
