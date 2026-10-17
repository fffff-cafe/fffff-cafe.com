import { ComponentProps, CSSProperties, FC, ReactNode } from "react"
import Link from "next/link"
import {
  accentColorHex,
  inkColorHex,
  monoFontFamily,
  paperColorHex,
} from "utils/constant"

type SectionProps = ComponentProps<"section"> & { dark?: boolean }

export const Section: FC<SectionProps> = ({
  dark,
  style,
  children,
  ...props
}) => (
  <section
    style={{
      background: dark ? inkColorHex : paperColorHex,
      borderTop: `2px solid ${inkColorHex}`,
      boxSizing: "border-box",
      color: dark ? paperColorHex : inkColorHex,
      lineHeight: 1.8,
      padding: "clamp(3.5rem, 8vw, 6rem) 1rem",
      scrollMarginTop: "6rem",
      ...style,
    }}
    {...props}
  >
    <div style={{ margin: "0 auto", maxWidth: "1080px" }}>{children}</div>
  </section>
)

type SectionTitleProps = ComponentProps<"h2"> & { label?: string }

export const SectionTitle: FC<SectionTitleProps> = ({
  label,
  style,
  children,
  ...props
}) => (
  <div style={{ marginBottom: "clamp(2rem, 5vw, 3rem)" }}>
    {label && <Label>{label}</Label>}
    <h2
      style={{
        fontSize: "clamp(1.9rem, 6vw, 3.5rem)",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        margin: ".5rem 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </h2>
  </div>
)

export const Label: FC<{ children: ReactNode }> = ({ children }) => (
  <span
    style={{
      background: accentColorHex,
      color: inkColorHex,
      display: "inline-block",
      fontFamily: monoFontFamily,
      fontSize: ".8rem",
      fontWeight: 700,
      letterSpacing: ".08em",
      padding: ".15rem .5rem",
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
)

// 下層ページの見出し（h1）
export const PageHeader: FC<{ label: string; title: string; lead?: string }> = ({
  label,
  title,
  lead,
}) => (
  <header
    style={{
      background: accentColorHex,
      color: inkColorHex,
      padding: "clamp(6rem, 14vw, 9rem) 1rem clamp(2.5rem, 6vw, 4rem)",
    }}
  >
    <div style={{ margin: "0 auto", maxWidth: "1080px" }}>
      <span
        style={{
          fontFamily: monoFontFamily,
          fontSize: ".85rem",
          fontWeight: 700,
          letterSpacing: ".1em",
        }}
      >
        {label}
      </span>
      <h1
        style={{
          fontSize: "clamp(2.4rem, 9vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: ".5rem 0 0",
        }}
      >
        {title}
      </h1>
      {lead && (
        <p style={{ fontSize: "1.05rem", margin: "1.25rem 0 0", maxWidth: "640px" }}>
          {lead}
        </p>
      )}
    </div>
  </header>
)

type ButtonLinkProps = { href: string; children: ReactNode; variant?: "accent" | "ink" | "outline" }

export const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  children,
  variant = "accent",
}) => {
  const external = href.startsWith("http")
  const colors = {
    accent: { background: accentColorHex, color: inkColorHex },
    ink: { background: inkColorHex, color: paperColorHex },
    outline: { background: "transparent", color: "inherit" },
  }[variant]
  return (
    <Link
      href={href}
      className="button-link"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      style={{
        ...colors,
        border: `2px solid ${variant === "outline" ? "currentColor" : inkColorHex}`,
        display: "inline-block",
        fontWeight: 700,
        padding: ".8rem 1.4rem",
        textDecoration: "none",
      }}
    >
      {children}
      {external ? " ↗" : " →"}
    </Link>
  )
}

// 項目名と値の一覧（料金・設備など）
export const InfoList: FC<{ items: [string, ReactNode][] }> = ({ items }) => (
  <dl style={{ borderTop: `2px solid currentColor`, margin: 0 }}>
    {items.map(([term, value]) => (
      <div
        key={term}
        style={{
          borderBottom: "1px solid currentColor",
          display: "flex",
          flexWrap: "wrap",
          gap: ".25rem 1.5rem",
          padding: ".9rem 0",
        }}
      >
        <dt style={{ fontWeight: 700, minWidth: "8em" }}>{term}</dt>
        <dd style={{ flex: "1 1 16rem", margin: 0 }}>{value}</dd>
      </div>
    ))}
  </dl>
)

export const gridStyle = (min: string): CSSProperties => ({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
})
