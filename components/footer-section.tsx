import React, { ReactElement } from "react"

const FooterSection = (): ReactElement => {
  return (
    <>
      <footer
        style={{
          background: "#0a0a0a",
          color: "#f0f0f0",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <section>
          <p
            style={{
              marginBottom: ".5rem",
            }}
          >
            FFFFF Cafe &copy; 2022-2024
          </p>
          <p
            style={{
              marginBottom: ".5rem",
            }}
          >
            <small>
              Powered by &nbsp;
              <a
                href="//reload.co.jp"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#d0d0d0",
                  textDecoration: "none",
                }}
              >
                Reload, Inc.
              </a>
            </small>
          </p>
        </section>
      </footer>
    </>
  )
}

export default FooterSection
