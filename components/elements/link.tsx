import React from "react"

export const ExternalLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, ...props }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      style={{ color: "white", margin: "0.25rem" }}
      {...props}
    >
      {children}
    </a>
  )
}
