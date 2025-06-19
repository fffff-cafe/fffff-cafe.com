"use client"

import React from "react"
import AccessSection from "components/access-section"
import CalendarSection from "components/calendar-section"
import ConceptSection from "components/concept-section"
import CoverImageSection from "components/cover-image-section"
import FooterSection from "components/footer-section"
import MoodSection from "components/mood-section"
import NowSection from "components/now-section"
import SystemSection from "components/system-section"
import MemberSection from "components/member-section"
import ContactSection from "components/contact-section"

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <CoverImageSection />
      <ConceptSection />
      <SystemSection />
      <MoodSection />
      <CalendarSection />
      <MemberSection />
      <NowSection />
      <AccessSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default IndexPage
