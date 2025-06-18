import React, { ReactElement } from "react"
import { primaryColorHex } from "utils/constant"
import ScrollIntoView from "react-scroll-into-view"
import { ExternalLink } from "components/elements/link"
import { GithubIcon } from "components/elements/icon"

const HeaderSection = (): ReactElement => {
  return (
    <>
      <header
        style={{
          backgroundColor: primaryColorHex,
          boxSizing: "border-box",
          color: "#eee",
          padding: "1rem",
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            maxWidth: "min(960px, 100%)",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              margin: 0,
            }}
          >
            FFFFF Cafe
          </h1>
          <nav>
            <ul
              style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-around",
                padding: "0 1rem",
                width: "100%",
              }}
            >
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <ScrollIntoView selector="#calendar">
                  <span
                    style={{
                      color: "#eee",
                      textDecoration: "none",
                    }}
                  >
                    カレンダー
                  </span>
                </ScrollIntoView>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <ScrollIntoView selector="#access">
                  <span
                    style={{
                      color: "#eee",
                      textDecoration: "none",
                    }}
                  >
                    アクセス
                  </span>
                </ScrollIntoView>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <ExternalLink href="//github.com/fffff-cafe/fffff-cafe.com">
                  <GithubIcon />
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default HeaderSection
