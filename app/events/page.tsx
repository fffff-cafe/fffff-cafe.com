import { ReactElement } from "react"
import { Metadata } from "next"
import { PageHeader } from "components/elements"
import UpcomingEventsSection from "components/upcoming-events-section"
import CalendarSection from "components/calendar-section"
import MoodSection from "components/mood-section"
import NowSection from "components/now-section"
import { getLatestArticles } from "utils/articles"

export const metadata: Metadata = {
  title: "イベント・もくもく会・勉強会 - 秋葉原",
  description:
    "秋葉原のFFFFF Cafeで開催するもくもく会・勉強会などのイベント一覧と営業カレンダー。開催日時・参加方法を掲載しています。",
  alternates: { canonical: "/events" },
  openGraph: { url: "/events" },
}

const EventsPage = async (): Promise<ReactElement> => {
  const latestArticles = await getLatestArticles(5)
  return (
    <>
      <PageHeader
        label="EVENTS"
        title="イベント"
        lead="もくもく会や勉強会など、FFFFF Cafe で開催するイベントの予定です。"
      />
      <UpcomingEventsSection />
      <CalendarSection />
      <MoodSection />
      <NowSection latestArticles={latestArticles} />
    </>
  )
}

export default EventsPage
