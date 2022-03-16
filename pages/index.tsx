import React from "react"
import AccessSection from "components/access-section"
import CalendarSection from "components/calendar-section"
import ConceptSection from "components/concept-section"
import CoverImageSection from "components/cover-image-section"
import FooterSection from "components/footer-section"
import Header from "components/header"
import MenuSection from "components/menu-section"
import MoodSection from "components/mood-section"
import NowSection from "components/now-section"
import SystemSection from "components/system-section"

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <CoverImageSection />
      <ConceptSection />
      <SystemSection />
      <MoodSection />
      <CalendarSection />
      <MenuSection />
      <NowSection />
      <AccessSection />
      <FooterSection />
    </>
  )
}

export default IndexPage
