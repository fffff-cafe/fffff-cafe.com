import React, { ReactElement } from "react"

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
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.666)",
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
              }}
            >
              <h1
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.5,
                }}
              >
                FFFFF Cafe
              </h1>
              <p>仕事をしやすく、それでいて遊びやすいような場所</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoverImageSection
