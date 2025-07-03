"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import {
  primaryColorHex,
  techGradientBlue,
  techAccentCyan,
} from "utils/constant"
import ScrollIntoView from "react-scroll-into-view"
import { ExternalLink } from "components/elements/link"
import { GithubIcon } from "components/elements/icon"

const HeaderSection = (): ReactElement => {
  return (
    <>
      <header
        style={{
          background: `linear-gradient(135deg, ${primaryColorHex} 0%, rgba(162, 32, 65, 0.9) 50%, ${techGradientBlue}33 100%)`,
          boxSizing: "border-box",
          color: "#eee",
          padding: "1rem",
          position: "fixed",
          top: 0,
          width: "100%",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${techAccentCyan}55`,
          boxShadow: `0 2px 20px ${techGradientBlue}22`,
          zIndex: 1000,
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
            <Link href="/">FFFFF Cafe</Link>
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
