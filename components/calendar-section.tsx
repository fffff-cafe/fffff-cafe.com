"use client"

import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import axios from "axios"
import { GoogleCalendarEventResponse, GoogleCalendarEventItem } from "@types"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import Modal from "react-modal"
import { sectionBackgroundColorHex, primaryColorHex } from "utils/constant"
import { useWindowWidth } from "utils/hooks/width"

const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
const calendarId = "dbofsjce5m94lubjbq28bhn2o8@group.calendar.google.com"
const key = "AIzaSyAejTOmT5qkL3uTEYBA1eQup2WVbD7pjPY"

dayjs.extend(timezone)

const CalendarSection = (): ReactElement => {
  const [events, setEvents] = useState<GoogleCalendarEventItem[]>()
  const nowDay = dayjs(new Date())
  const [selectedEvent, setSelectedEvent] =
    React.useState<GoogleCalendarEventItem | null>(null)
  const width = useWindowWidth()

  useEffect(() => {
    const fetchEvents = async (nowDay: dayjs.Dayjs) => {
      const { data } = await axios.get<GoogleCalendarEventResponse>(
        `${baseUrl}/${calendarId}/events`,
        {
          params: {
            key,
            showDeleted: true,
            timeMin: nowDay.format("YYYY-MM-DDT00:00:00[Z]"),
            timeMax: nowDay.add(30, "day").format("YYYY-MM-DDT00:00:00[Z]"),
            orderBy: "startTime",
            singleEvents: true,
          },
        }
      )
      setEvents(data.items.filter((item) => item.status == "confirmed"))
    }
    const now = dayjs(new Date())
    fetchEvents(now)
  }, [])

  return (
    <>
      <Section>
        <SectionTitle id="calendar">営業カレンダー</SectionTitle>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".15rem",
            margin: "auto",
            maxWidth: "960px",
            width: "100%",
          }}
        >
          {Array(30)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#333",
                  boxSizing: "border-box",
                  marginLeft:
                    width > 800 && i == 0
                      ? `calc(${14.28 * nowDay.day()}%)`
                      : undefined,
                  minHeight: "2rem",
                  padding: "1.25rem .5rem .25rem",
                  position: "relative",
                  width:
                    width > 800
                      ? "calc(14.28% - .15rem)"
                      : "calc(33.33% - .15rem) ",
                }}
              >
                <div
                  style={{
                    fontSize: ".5rem",
                    left: ".5rem",
                    margin: ".15rem",
                    position: "absolute",
                    top: ".1rem",
                  }}
                >
                  {nowDay.add(i, "day").format("M/D ddd")}
                </div>
                {events
                  ?.filter(
                    (e) =>
                      dayjs(e.start.dateTime).format("M/D") ===
                      nowDay.add(i, "day").format("M/D")
                  )
                  .map((event) => (
                    <div
                      key={event.id}
                      onClick={() => {
                        if (event.description) {
                          setSelectedEvent(event)
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          if (event.description) {
                            setSelectedEvent(event)
                          }
                        }
                      }}
                      role={event.description ? "button" : undefined}
                      tabIndex={event.description ? 0 : undefined}
                      style={{
                        backgroundColor: event.description
                          ? primaryColorHex
                          : "#444",
                        borderRadius: ".25rem",
                        color: "#fff",
                        display: "block",
                        fontSize: ".75rem",
                        padding: ".25rem .5rem",
                        textDecoration: "none",
                        cursor: event.description ? "pointer" : "default",
                        marginBottom: ".25rem",
                      }}
                    >
                      <time
                        style={{
                          display: "block",
                          fontSize: ".5rem",
                        }}
                      >
                        {dayjs(event.start.dateTime).format("HH:mm")}-
                        {dayjs(event.end.dateTime).format("HH:mm")}
                      </time>
                      {event.summary}
                    </div>
                  ))}
              </div>
            ))}
        </div>
        {selectedEvent && (
          <Modal
            isOpen={!!selectedEvent}
            onRequestClose={() => setSelectedEvent(null)}
            contentLabel="Event"
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                backgroundColor: sectionBackgroundColorHex,
                margin: "auto",
                maxWidth: "800px",
              },
            }}
          >
            <div
              style={{
                color: "#d0d0d0",
              }}
            >
              <h2
                style={{
                  color: "white",
                }}
              >
                {selectedEvent.summary}
              </h2>
              <p>
                <time>
                  {dayjs(selectedEvent.start.dateTime).format(
                    "MM/DD (ddd) HH:mm"
                  )}
                  -{dayjs(selectedEvent.end.dateTime).format("HH:mm")}
                </time>
              </p>
              <br />
              <p>
                {selectedEvent.description && (
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      fontSize: ".75rem",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: selectedEvent.description.replace(
                        /<a/g,
                        `<a style="color: ${primaryColorHex}"`
                      ),
                    }}
                  />
                )}
              </p>
            </div>
          </Modal>
        )}
      </Section>
    </>
  )
}

export default CalendarSection
