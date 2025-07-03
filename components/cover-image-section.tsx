"use client"

import React, { ReactElement } from "react"
import { techGradientBlue, techAccentCyan } from "utils/constant"

const CoverImageSection = (): ReactElement => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/images/cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          height: "50vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(138, 43, 226, 0.25) 50%, rgba(0, 0, 0, 0.7) 100%)`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100%",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle at 20% 80%, ${techAccentCyan}22 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${techGradientBlue}22 0%, transparent 50%)`,
              opacity: 0.3,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "100%",
              maxWidth: "640px",
              position: "relative",
              width: "100%",
            }}
          >
            <section
              style={{
                boxSizing: "border-box",
                color: "#eee",
                height: "33%",
                lineHeight: 1.5,
                padding: "1rem",
                position: "absolute",
                textAlign: "center",
                width: "100%",
                zIndex: 2,
              }}
            >
              <h1
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.5,
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.9))",
                }}
              >
                FFFFF Cafe
              </h1>
              <p
                style={{
                  color: "#f0f0f0",
                  textShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
                }}
              >
                仕事をしやすく、それでいて遊びやすいような場所
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoverImageSection
