"use client"

import React, { ReactElement } from "react"
import dayjs from "dayjs"
import { Section, SectionTitle } from "components/elements"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import { isPublicEvent, useCalendarEvents } from "utils/hooks/calendar"

const WeekSection = (): ReactElement => {
  const events = useCalendarEvents(7)
  const today = dayjs()

  return (
    <Section id="week">
      <SectionTitle label="This week">直近一週間の営業・イベント</SectionTitle>
      {events === undefined && <p role="status">営業情報を読み込み中…</p>}
      {events === null && <p>営業情報を取得できませんでした。</p>}
      {events && (
        <ol style={{ border: `2px solid ${inkColorHex}`, listStyle: "none", padding: 0 }}>
          {Array(7)
            .fill(null)
            .map((_, i) => {
              const day = today.add(i, "day")
              const dayEvents = events.filter((e) =>
                dayjs(e.start.dateTime).isSame(day, "day")
              )
              return (
                <li
                  key={i}
                  style={{
                    background: "#fff",
                    borderTop: i ? `1px solid ${inkColorHex}` : "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".5rem 1rem",
                    padding: ".75rem 1rem",
                  }}
                >
                  <time
                    dateTime={day.format("YYYY-MM-DD")}
                    style={{ fontFamily: monoFontFamily, fontWeight: 900, minWidth: "6rem" }}
                  >
                    {day.format("M/D ddd")}
                  </time>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                    {dayEvents.length === 0 && <span style={{ color: "#888" }}>予定なし</span>}
                    {dayEvents.map((event) => (
                      <a
                        key={event.id}
                        href={isPublicEvent(event) ? "/events" : undefined}
                        style={{
                          background: isPublicEvent(event) ? accentColorHex : "#e8e6e0",
                          color: isPublicEvent(event) ? paperColorHex : inkColorHex,
                          fontSize: ".85rem",
                          padding: ".25rem .5rem",
                          textDecoration: "none",
                        }}
                      >
                        <span style={{ fontFamily: monoFontFamily, marginRight: ".5rem" }}>
                          {dayjs(event.start.dateTime).format("HH:mm")}-
                          {dayjs(event.end.dateTime).format("HH:mm")}
                        </span>
                        {event.summary}
                      </a>
                    ))}
                  </div>
                </li>
              )
            })}
        </ol>
      )}
    </Section>
  )
}

export default WeekSection
