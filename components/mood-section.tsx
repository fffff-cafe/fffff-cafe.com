"use client"

import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle, gridStyle } from "components/elements"
import { accentColorHex } from "utils/constant"

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
      aria-label="写真の拡大表示"
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
        alt="FFFFF Cafe の店内写真（拡大）"
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

const activities = [
  { title: "もくもく会", body: "それぞれが自分の作業を黙々と進める会。ひとりでも気軽に参加できます。" },
  { title: "勉強会", body: "世界史勉強会など、テーマを決めて学ぶ会を開催しています。" },
  { title: "AI関連イベント", body: "コーディングエージェントや生成AIを実際に触ってみる会など。" },
  { title: "レビュー会・解体会", body: "エンジニアが運営する場所ならではの企画も。" },
  { title: "持ち込み企画", body: "貸切利用で、あなたの勉強会やワークショップを開催できます。" },
]

const MoodSection = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageIndex, setImageIndex] = useState<number>(0)

  return (
    <>
      <Section id="community" dark>
        <SectionTitle label="Community">
          集まって、
          <br />
          手を動かす。
        </SectionTitle>
        <ul style={{ ...gridStyle("220px"), listStyle: "none", marginBottom: "3rem", padding: 0 }}>
          {activities.map(({ title, body }) => (
            <li key={title} style={{ borderTop: `4px solid ${accentColorHex}`, paddingTop: "1rem" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: ".5rem" }}>{title}</h3>
              <p style={{ fontSize: ".95rem" }}>{body}</p>
            </li>
          ))}
        </ul>
        <h3 style={{ marginBottom: "1rem" }}>店内の様子</h3>
        <ul style={{ ...gridStyle("150px"), gap: "4px", listStyle: "none", padding: 0 }}>
          {photos.map((photo, i) => (
            <li key={photo}>
              <button
                type="button"
                aria-label={`店内写真 ${i + 1} を拡大`}
                onClick={() => {
                  setIsOpen(true)
                  setImageIndex(i)
                }}
                style={{ background: "none", border: "none", cursor: "zoom-in", padding: 0, width: "100%" }}
              >
                <img
                  src={photo}
                  alt={`FFFFF Cafe の店内写真 ${i + 1}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: 1, objectFit: "cover", width: "100%" }}
                />
              </button>
            </li>
          ))}
        </ul>
      </Section>
      {isOpen && (
        <LightBox
          mainSrc={photos[imageIndex]}
          onClose={() => setIsOpen(false)}
          onMovePrev={() =>
            setImageIndex((imageIndex + photos.length - 1) % photos.length)
          }
          onMoveNext={() => setImageIndex((imageIndex + 1) % photos.length)}
        />
      )}
    </>
  )
}

export default MoodSection
