import React from "react"

export const ExternalLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: "white", margin: "0.25rem" }}
    >
      {children}
    </a>
  )
}
