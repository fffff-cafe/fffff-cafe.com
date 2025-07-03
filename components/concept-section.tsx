"use client"

import React, { ReactElement } from "react"
import { Section } from "components/elements"
import { TechParticles, TechMatrix } from "components/elements/tech-effects"

const ConceptSection = (): ReactElement => {
  return (
    <>
      <Section style={{ position: "relative", overflow: "hidden" }}>
        <TechParticles />
        <TechMatrix />
        <div style={{ position: "relative", zIndex: 2 }}>
          <p>
            株式会社リロードが運営する、全席電源・Wi-Fiを完備した作業できるカフェ。
          </p>
          <p>
            「仕事をしやすく、それでいて遊びやすいような場所」を目指し、秋葉原でITエンジニアたちが運営中。
          </p>
        </div>
      </Section>
    </>
  )
}

export default ConceptSection
