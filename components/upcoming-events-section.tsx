"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import dayjs from "dayjs"
import { ButtonLink, Section, SectionTitle, gridStyle } from "components/elements"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import {
  applyLink,
  eventFee,
  eventSummary,
  isPublicEvent,
  plainText,
  useCalendarEvents,
} from "utils/hooks/calendar"
import { twitterUrl } from "utils/info"

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const UpcomingEventsSection = ({ limit }: { limit?: number }): ReactElement => {
  const events = useCalendarEvents(60)
  const upcoming = events
    ?.filter((e) => isPublicEvent(e) && dayjs(e.end.dateTime).isAfter(dayjs()))
    .slice(0, limit)

  return (
    <Section id="events">
      <SectionTitle label="Upcoming events">直近のイベント</SectionTitle>
      {events === undefined && <p role="status">イベント情報を読み込み中…</p>}
      {events === null && (
        <p>
          イベント情報を取得できませんでした。最新情報は
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            X（Twitter）
          </a>
          をご確認ください。
        </p>
      )}
      {upcoming?.length === 0 && (
        <div style={{ border: `2px dashed ${inkColorHex}`, padding: "1.5rem" }}>
          <p>現在公開中の開催予定はありません。</p>
          <p>
            過去の開催内容は<Link href="/articles">イベントレポート</Link>
            を、新しい告知は
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              X（Twitter）
            </a>
            をご覧ください。
          </p>
        </div>
      )}
      {!!upcoming?.length && (
        <ol style={{ ...gridStyle("280px"), listStyle: "none", padding: 0 }}>
          {upcoming.map((event) => {
            const start = dayjs(event.start.dateTime)
            const text = plainText(event.description)
            const fee = eventFee(text)
            const link = applyLink(event.description)
            return (
              <li
                key={event.id}
                id={`event-${event.id}`}
                style={{
                  background: "#fff",
                  border: `2px solid ${inkColorHex}`,
                  boxShadow: `6px 6px 0 ${inkColorHex}`,
                  display: "flex",
                  flexDirection: "column",
                  scrollMarginTop: "6rem",
                }}
              >
                <div
                  style={{
                    alignItems: "baseline",
                    background: accentColorHex,
                    color: paperColorHex,
                    borderBottom: `2px solid ${inkColorHex}`,
                    display: "flex",
                    fontFamily: monoFontFamily,
                    fontWeight: 900,
                    gap: ".75rem",
                    padding: ".75rem 1rem",
                  }}
                >
                  <time dateTime={event.start.dateTime} style={{ fontSize: "2.2rem", lineHeight: 1 }}>
                    {start.format("MM.DD")}
                  </time>
                  <span>{weekdays[start.day()]}</span>
                  <span style={{ marginLeft: "auto" }}>
                    {start.format("HH:mm")}–{dayjs(event.end.dateTime).format("HH:mm")}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.2rem", lineHeight: 1.4 }}>{event.summary}</h3>
                  {fee && <p style={{ fontWeight: 700, marginTop: ".5rem" }}>{fee}</p>}
                  <p
                    style={{
                      color: "#444",
                      flexGrow: 1,
                      fontSize: ".9rem",
                      margin: ".5rem 0 1rem",
                    }}
                  >
                    {eventSummary(text)}
                  </p>
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer" style={{ fontWeight: 700 }}>
                      詳細・申込（connpass） ↗
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      )}
      {limit && (
        <div style={{ marginTop: "2.5rem" }}>
          <ButtonLink href="/events" variant="ink">
            イベント一覧・カレンダー
          </ButtonLink>
        </div>
      )}
    </Section>
  )
}

export default UpcomingEventsSection
