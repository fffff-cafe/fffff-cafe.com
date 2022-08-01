import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import axios from "axios"
import { GoogleCalendarEventResponse, GoogleCalendarEventItem } from "@types"
import dayjs from "dayjs"
import Styled from "styled-components"

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
  background-color: #555;
  border-radius: .25rem;
  color: #fff;
  display: block;
  font-size: .75rem;
  padding: .25rem .5rem;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: .25rem;
  }

  time {
    display: block;
    font-size: .5rem;
  }
`

const CalendarSection = (): ReactElement => {
  const [events, setEvents] = useState<GoogleCalendarEventItem[]>()
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
                className={i === 0 ? `is-offset-${dayjs().day()}` : undefined}
              >
                <DayTitle>{dayjs().add(i, "day").format("M/D")}</DayTitle>
                {events
                  ?.filter(
                    (e) =>
                      dayjs(e.start.dateTime).format("M/D") ===
                      dayjs().add(i, "day").format("M/D")
                  )
                  .map((event) => (
                    <EventBlock
                      key={event.id}
                      href={event.htmlLink}
                      target="_blank"
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
      </Section>
    </>
  )
}

export default CalendarSection
