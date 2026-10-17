import React, { ReactElement } from "react"
import Link from "next/link"
import { GithubIcon } from "components/elements/icon"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import { access, address, githubUrl, twitterUrl } from "utils/info"

const links = [
  { href: "/guide", label: "利用案内・料金" },
  { href: "/events", label: "イベント" },
  { href: "/rental", label: "貸切・会場利用" },
  { href: "/access", label: "アクセス" },
  { href: "/articles", label: "お知らせ・レポート" },
]

const FooterSection = (): ReactElement => {
  return (
    <footer
      style={{
        background: inkColorHex,
        color: paperColorHex,
        padding: "4rem 1rem 2rem",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "1080px" }}>
        <p
          style={{
            color: accentColorHex,
            fontFamily: monoFontFamily,
            fontSize: "clamp(2.5rem, 12vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          FFFFF Cafe
        </p>
        <p style={{ margin: "1rem 0 2rem" }}>
          {address}
          <br />
          {access}
        </p>
        <nav aria-label="フッター">
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".5rem 1.5rem",
              listStyle: "none",
              padding: 0,
            }}
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li>
              <a href={twitterUrl} target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </nav>
        <p style={{ fontSize: ".8rem", marginTop: "3rem" }}>
          FFFFF Cafe &copy; 2022-{new Date().getFullYear()} / Powered by{" "}
          <a href="https://reload.co.jp" target="_blank" rel="noreferrer">
            Reload, Inc.
          </a>
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
