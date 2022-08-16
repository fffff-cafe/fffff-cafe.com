import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import axios from "axios"
import { GoogleCalendarEventResponse, GoogleCalendarEventItem } from "@types"
import dayjs from "dayjs"
import Styled from "styled-components"
import Modal from "react-modal"
import { sectionBackgroundColorHex, primaryColorHex } from "utils/constant"

const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
const calendarId = "dbofsjce5m94lubjbq28bhn2o8@group.calendar.google.com"
const key = "AIzaSyAejTOmT5qkL3uTEYBA1eQup2WVbD7pjPY"

const CalendarTable = Styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1000px;
`

const DaySection = Styled.div`
  background: #333;
  box-sizing: border-box;
  margin: .15rem;
  min-height: 2rem;
  padding: 1.25rem .5rem .25rem;
  position: relative;
  text-align: left;
  width: 100%;


  @media screen and (min-width: 800px) {
    width: calc(14.28% - .3rem);

    &.is-offset-1 {
      margin-left: calc(14.28% + .15rem);
    }
    &.is-offset-2 {
      margin-left: calc(14.28% * 2 + .15rem);
    }
    &.is-offset-3 {
      margin-left: calc(14.28% * 3 + .15rem);
    }
    &.is-offset-4 {
      margin-left: calc(14.28% * 4 + .15rem);
    }
    &.is-offset-5 {
      margin-left: calc(14.28% * 5 + .15rem);
    }
    &.is-offset-6 {
      margin-left: calc(14.28% * 6 + .15rem);
    }
  }
`

const DayTitle = Styled.div`
  font-size: .5rem;
  left: .5rem;
  position: absolute;
  top: .1rem;
`

const EventBlock = Styled.a`
  background-color: #777;
  border-radius: .25rem;
  color: #fff;
  display: block;
  font-size: .75rem;
  padding: .25rem .5rem;
  text-decoration: none;

  &.has-detailed {
    background-color: #444;
    border: solid 1px ${primaryColorHex};
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: .25rem;
  }

  time {
    display: block;
    font-size: .5rem;
  }
`

const EventModalContent = Styled.div`
  color: #d0d0d0;
  h2 {
    color: white;
  }
  pre {
    a {
      color: ${primaryColorHex};
    }
  }
`

const CalendarSection = (): ReactElement => {
  const [events, setEvents] = useState<GoogleCalendarEventItem[]>()
  const [nowDay, setNowDay] = useState<dayjs.Dayjs>(dayjs(new Date()))
  const [selectedEvent, setSelectedEvent] =
    React.useState<GoogleCalendarEventItem | null>(null)
  const fetchEvents = async () => {
    const { data } = await axios.get<GoogleCalendarEventResponse>(
      `${baseUrl}/${calendarId}/events`,
      {
        params: {
          key,
          showDeleted: true,
          timeMin: dayjs().format("YYYY-MM-DDT00:00:00[Z]"),
          timeMax: dayjs().add(30, "day").format("YYYY-MM-DDT00:00:00[Z]"),
          orderBy: "startTime",
          singleEvents: true,
        },
      }
    )
    setEvents(data.items.filter((item) => item.status == "confirmed"))
  }
  useEffect(() => {
    fetchEvents()
    setNowDay(dayjs(new Date()))
  }, [])

  return (
    <>
      <Section>
        <SectionTitle id="calendar">営業カレンダー</SectionTitle>
        <CalendarTable>
          {Array(30)
            .fill(null)
            .map((_, i) => (
              <DaySection
                key={i}
                className={i === 0 ? `is-offset-${nowDay.day()}` : undefined}
              >
                <DayTitle>{nowDay.add(i, "day").format("M/D")}</DayTitle>
                {events
                  ?.filter(
                    (e) =>
                      dayjs(e.start.dateTime).format("M/D") ===
                      nowDay.add(i, "day").format("M/D")
                  )
                  .map((event) => (
                    <EventBlock
                      key={event.id}
                      onClick={() =>
                        event.description && setSelectedEvent(event)
                      }
                      className={event.description && "has-detailed"}
                    >
                      <time>
                        {dayjs(event.start.dateTime).format("HH:mm")}-
                        {dayjs(event.end.dateTime).format("HH:mm")}
                      </time>
                      {event.summary}
                    </EventBlock>
                  ))}
              </DaySection>
            ))}
        </CalendarTable>
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
            <EventModalContent>
              <h2>{selectedEvent.summary}</h2>
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
                    style={{ whiteSpace: "pre-wrap", fontSize: ".75rem" }}
                    dangerouslySetInnerHTML={{
                      __html: selectedEvent.description,
                    }}
                  />
                )}
              </p>
            </EventModalContent>
          </Modal>
        )}
      </Section>
    </>
  )
}

export default CalendarSection
