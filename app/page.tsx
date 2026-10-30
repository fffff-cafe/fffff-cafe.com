import React from "react"
import AccessSection from "components/access-section"
import CalendarSection from "components/calendar-section"
import ConceptSection from "components/concept-section"
import CoverImageSection from "components/cover-image-section"
import MoodSection from "components/mood-section"
import NowSection from "components/now-section"
import RentalSection from "components/rental-section"
import SystemSection from "components/system-section"
import UpcomingEventsSection from "components/upcoming-events-section"
import WeekSection from "components/week-section"
import MemberSection from "components/member-section"
import ContactSection from "components/contact-section"
import { getLatestArticles } from "utils/articles"

const IndexPage = async (): Promise<React.ReactElement> => {
  const latestArticles = await getLatestArticles(3)

  return (
    <>
      <CoverImageSection />
      <WeekSection />
      <ConceptSection />
      <UpcomingEventsSection limit={3} />
      <SystemSection />
      <MoodSection />
      <RentalSection />
      <CalendarSection />
      <NowSection latestArticles={latestArticles} />
      <AccessSection />
      <MemberSection />
      <ContactSection />
    </>
  )
}

export default IndexPage
