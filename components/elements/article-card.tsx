"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import { primaryColorHex } from "utils/constant"
import dayjs from "dayjs"

interface ArticleCardProps {
  id: string
  title: string
  date: string
}

const ArticleCard = ({ id, title, date }: ArticleCardProps): ReactElement => {
  const formattedDate = date ? dayjs(date).format("YYYY年MM月DD日") : ""

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        marginBottom: "1.5rem",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
        e.currentTarget.style.borderColor = primaryColorHex
        e.currentTarget.style.transform = "translateY(-2px)"
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <Link
        href={`/articles/${id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          padding: "1rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.3rem",
            margin: "0 0 0.75rem 0",
            color: "#f0f0f0",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        {formattedDate && (
          <p
            style={{
              color: "#aaa",
              fontSize: "0.9rem",
              margin: 0,
              fontWeight: 400,
            }}
          >
            {formattedDate}
          </p>
        )}
      </Link>
    </div>
  )
}

export default ArticleCard
