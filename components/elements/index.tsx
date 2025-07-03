"use client"

import { ComponentProps, FC } from "react"
import { sectionBackgroundColorHex, techGradientBlue, techAccentCyan } from "utils/constant"

export const SectionTitle: FC<ComponentProps<"h2">> = ({
  style,
  children,
  ...props
}) => (
  <h2
    style={{
      borderBottom: `solid 2px ${techAccentCyan}`,
      color: "#f0f0f0",
      display: "inline-block",
      fontSize: "1.5rem",
      lineHeight: 1.5,
      margin: "1rem .75rem 1.5rem",
      paddingBottom: ".25rem",
      textShadow: `0 0 10px ${techGradientBlue}55`,
      position: "relative",
      ...style,
    }}
    {...props}
  >
    {children}
    <div
      style={{
        position: "absolute",
        bottom: "-2px",
        left: 0,
        right: 0,
        height: "2px",
        background: `linear-gradient(90deg, ${techAccentCyan}, ${techGradientBlue})`,
        boxShadow: `0 0 10px ${techAccentCyan}`,
      }}
    />
  </h2>
)

export const Section: FC<ComponentProps<"section">> = ({
  style,
  children,
  ...props
}) => (
  <section
    style={{
      background: `linear-gradient(180deg, ${sectionBackgroundColorHex} 0%, rgba(32, 24, 16, 0.95) 100%)`,
      boxSizing: "border-box",
      color: "#f0f0f0",
      lineHeight: 1.5,
      padding: "2rem 1rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "300%",
        height: "100%",
        background: `linear-gradient(90deg, transparent 0%, ${techGradientBlue}11 50%, transparent 100%)`,
        pointerEvents: "none",
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>
      {children}
    </div>
  </section>
)
