"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"

const navItems = [
  { href: "/guide", label: "利用案内" },
  { href: "/events", label: "イベント" },
  { href: "/rental", label: "貸切" },
  { href: "/access", label: "アクセス" },
  { href: "/articles", label: "お知らせ" },
]

const HeaderSection = (): ReactElement => {
  const pathname = usePathname()
  return (
    <header
      style={{
        background: inkColorHex,
        borderBottom: `2px solid ${inkColorHex}`,
        color: paperColorHex,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "1080px",
          padding: "0 .5rem",
        }}
      >
        <Link
          href="/"
          style={{
            background: accentColorHex,
            color: paperColorHex,
            fontFamily: monoFontFamily,
            fontSize: "1.1rem",
            fontWeight: 900,
            letterSpacing: ".05em",
            padding: ".75rem .5rem",
            textDecoration: "none",
          }}
        >
          FFFFF Cafe
        </Link>
        <nav aria-label="メイン" style={{ overflowX: "auto" }}>
          <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  aria-current={pathname?.startsWith(href) ? "page" : undefined}
                  style={{
                    display: "block",
                    fontSize: ".9rem",
                    fontWeight: 700,
                    padding: ".75rem .6rem",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderSection
