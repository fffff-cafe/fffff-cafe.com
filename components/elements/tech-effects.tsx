"use client"

import React, { FC, useEffect, useState } from "react"
import { techGradientBlue, techAccentCyan, techGradientGreen } from "utils/constant"

export const TechHoverCard: FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        filter: isHovered ? `drop-shadow(0 8px 16px ${techGradientBlue}44)` : "none",
      }}
    >
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${techAccentCyan}11, ${techGradientBlue}11)`,
            borderRadius: "4px",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      )}
      {children}
    </div>
  )
}

export const TechParticles: FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setParticles(newParticles)
  }, [])
  
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: "2px",
            height: "2px",
            background: techAccentCyan,
            borderRadius: "50%",
            boxShadow: `0 0 6px ${techAccentCyan}`,
          }}
        />
      ))}
    </div>
  )
}

export const TechMatrix: FC = () => {
  const [codes, setCodes] = useState<string[]>([])
  
  useEffect(() => {
    const chars = "0123456789ABCDEF"
    const newCodes = Array.from({ length: 8 }, () => 
      Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
    )
    setCodes(newCodes)
    
    const interval = setInterval(() => {
      setCodes(prev => prev.map(() => 
        Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
      ))
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        fontFamily: "monospace",
        fontSize: "0.7rem",
        color: techGradientGreen,
        opacity: 0.4,
        lineHeight: 1.2,
        pointerEvents: "none",
        textShadow: `0 0 5px ${techGradientGreen}`,
      }}
    >
      {codes.map((code, i) => (
        <div key={i} style={{ transition: "all 0.5s ease" }}>
          {code}
        </div>
      ))}
    </div>
  )
}