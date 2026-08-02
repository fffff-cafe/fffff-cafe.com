"use client"

import React, { ReactElement } from "react"

const CoverImageSection = (): ReactElement => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundImage: "url(/images/cover.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          height: "100%",
          position: "absolute",
          width: "100%",
        }}
      />
      <div
        style={{
          boxSizing: "border-box",
          color: "#eee",
          padding: "1.5rem",
          position: "relative",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          FFFFF Cafe
        </h1>
        <p
          style={{
            color: "#f0f0f0",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            margin: "1.5rem auto 0",
            maxWidth: "600px",
          }}
        >
          仕事をしやすく、それでいて遊びやすいような場所
        </p>
      </div>
    </div>
  )
}

export default CoverImageSection
