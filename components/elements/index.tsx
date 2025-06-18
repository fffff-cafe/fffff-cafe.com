import { ComponentProps, FC } from "react"
import { sectionBackgroundColorHex } from "utils/constant"

export const SectionTitle: FC<ComponentProps<"h2">> = ({
  style,
  children,
  ...props
}) => (
  <h2
    style={{
      borderBottom: "solid 2px #f0f0f0",
      color: "#f0f0f0",
      display: "inline-block",
      fontSize: "1.5rem",
      lineHeight: 1.5,
      margin: "1rem .75rem 1.5rem",
      paddingBottom: ".25rem",
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
      lineHeight: 1.5,
      padding: "2rem 1rem",
      textAlign: "center",
      ...style,
    }}
    {...props}
  >
    {children}
  </section>
)
