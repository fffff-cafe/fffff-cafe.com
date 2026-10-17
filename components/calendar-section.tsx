"use client"

import React, { CSSProperties, ReactElement, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import { GoogleCalendarEventItem } from "@types"
import dayjs from "dayjs"
import Modal from "react-modal"
import { accentColorHex, inkColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import { isPublicEvent, useCalendarEvents } from "utils/hooks/calendar"

const CalendarSection = (): ReactElement => {
  const events = useCalendarEvents(30)
  const nowDay = dayjs()
  const [selectedEvent, setSelectedEvent] =
    useState<GoogleCalendarEventItem | null>(null)

  return (
    <Section id="calendar">
      <SectionTitle label="Calendar">営業カレンダー</SectionTitle>
      <p style={{ marginBottom: "1.5rem" }}>
        今後30日間の営業・イベント予定です。
        <span
          style={{ background: accentColorHex, border: `1px solid ${inkColorHex}`, padding: "0 .4rem" }}
        >
          黄色
        </span>
        の予定は押すと詳細を表示します。
      </p>
      <div
        className="calendar-grid"
        style={{ "--start": nowDay.day() + 1 } as CSSProperties}
      >
        {Array(30)
          .fill(null)
          .map((_, i) => {
            const day = nowDay.add(i, "day")
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  minHeight: "5rem",
                  outline: `1px solid ${inkColorHex}`,
                  padding: ".4rem",
                }}
              >
                <div
                  style={{
                    fontFamily: monoFontFamily,
                    fontSize: ".75rem",
                    fontWeight: 700,
                    marginBottom: ".25rem",
                  }}
                >
                  {day.format("M/D ddd")}
                </div>
                {events
                  ?.filter(
                    (e) => dayjs(e.start.dateTime).format("M/D") === day.format("M/D")
                  )
                  .map((event) => {
                    const time = (
                      <time style={{ display: "block", fontFamily: monoFontFamily, fontSize: ".7rem" }}>
                        {dayjs(event.start.dateTime).format("HH:mm")}-
                        {dayjs(event.end.dateTime).format("HH:mm")}
                      </time>
                    )
                    const chipStyle: CSSProperties = {
                      background: isPublicEvent(event) ? accentColorHex : "#e8e6e0",
                      border: isPublicEvent(event) ? `1px solid ${inkColorHex}` : "none",
                      color: inkColorHex,
                      display: "block",
                      fontSize: ".75rem",
                      lineHeight: 1.4,
                      marginBottom: ".25rem",
                      padding: ".25rem .4rem",
                      textAlign: "left",
                      width: "100%",
                    }
                    return isPublicEvent(event) ? (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        style={{ ...chipStyle, cursor: "pointer", font: "inherit", fontSize: ".75rem" }}
                      >
                        {time}
                        {event.summary}
                      </button>
                    ) : (
                      <div key={event.id} style={chipStyle}>
                        {time}
                        {event.summary}
                      </div>
                    )
                  })}
              </div>
            )
          })}
      </div>
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={() => setSelectedEvent(null)}
          contentLabel={selectedEvent.summary}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 1100,
            },
            content: {
              backgroundColor: paperColorHex,
              border: `2px solid ${inkColorHex}`,
              borderRadius: 0,
              inset: "5vh 1rem",
              margin: "auto",
              maxWidth: "800px",
            },
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedEvent(null)}
            style={{
              background: inkColorHex,
              border: "none",
              color: paperColorHex,
              cursor: "pointer",
              float: "right",
              font: "inherit",
              padding: ".25rem .75rem",
            }}
          >
            閉じる ×
          </button>
          <h2 style={{ lineHeight: 1.3 }}>{selectedEvent.summary}</h2>
          <p style={{ fontFamily: monoFontFamily, fontWeight: 700, margin: ".5rem 0 1.5rem" }}>
            <time dateTime={selectedEvent.start.dateTime}>
              {dayjs(selectedEvent.start.dateTime).format("YYYY/MM/DD (ddd) HH:mm")}-
              {dayjs(selectedEvent.end.dateTime).format("HH:mm")}
            </time>
          </p>
          <div
            style={{ fontSize: ".9rem", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            dangerouslySetInnerHTML={{ __html: selectedEvent.description ?? "" }}
          />
        </Modal>
      )}
    </Section>
  )
}

export default CalendarSection
