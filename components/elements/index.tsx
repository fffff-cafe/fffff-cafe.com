"use client"

import { ComponentProps, FC } from "react"
import { sectionBackgroundColorHex, techAccentCyan } from "utils/constant"

export const SectionTitle: FC<ComponentProps<"h2">> = ({
  style,
  children,
  ...props
}) => (
  <h2
    style={{
      borderBottom: `solid 1px ${techAccentCyan}88`,
      color: "#f0f0f0",
      display: "inline-block",
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
      fontWeight: 600,
      letterSpacing: "0.02em",
      lineHeight: 1.4,
      margin: "0 .75rem 2.5rem",
      paddingBottom: "0.75rem",
      ...style,
    }}
    {...props}
  >
    {children}
  </h2>
)

export const Section: FC<ComponentProps<"section">> = ({
  style,
  children,
  ...props
}) => (
  <section
    style={{
      background: sectionBackgroundColorHex,
      boxSizing: "border-box",
      color: "#f0f0f0",
      lineHeight: 1.7,
      padding: "clamp(3.5rem, 8vw, 6rem) 1.5rem",
      textAlign: "center",
      ...style,
    }}
    {...props}
  >
    {children}
  </section>
)
