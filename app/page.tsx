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
import { getLatestArticles } from "utils/articles"

const IndexPage = async (): Promise<React.ReactElement> => {
  const latestArticles = await getLatestArticles(3)

  return (
    <>
      <CoverImageSection />
      <ConceptSection />
      <SystemSection />
      <MoodSection />
      <CalendarSection />
      <MemberSection />
      <NowSection latestArticles={latestArticles} />
      <AccessSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default IndexPage
