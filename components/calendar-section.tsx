import React, { ReactElement, useEffect, useState } from "react"
import { Section, SectionTitle } from "components/elements"
import axios from "axios"
import { GoogleCalendarEventResponse, GoogleCalendarEventItem } from "@types"
import dayjs from "dayjs"
import Styled from "styled-components"

const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
const calendarId = "dbofsjce5m94lubjbq28bhn2o8@group.calendar.google.com"
const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

const Table = Styled.table`
  margin: auto;
  max-width: 600px;
  text-align: left;
  width: 100%;
  a {
    color: #f0f0f0;
    text-decoration: none;
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
          timeMax: dayjs().add(2, "week").format("YYYY-MM-DDT00:00:00[Z]"),
          orderBy: "startTime",
          singleEvents: true,
        },
      }
    )
    setEvents(data.items)
  }
  useEffect(() => {
    fetchEvents()
  }, [])
  return (
    <>
      <Section>
        <SectionTitle id="calendar">営業カレンダー</SectionTitle>
        <Table>
          {events &&
            events.map((event) => (
              <tr key={event.id}>
                <td>
                  {dayjs(event.start.dateTime).format("M/D HH:mm")}-
                  {dayjs(event.end.dateTime).format("HH:mm")}
                </td>
                <th>
                  <a href={event.htmlLink} target="_blank" rel="noreferrer">
                    <h3>{event.summary}</h3>
                  </a>
                </th>
              </tr>
            ))}
        </Table>
      </Section>
    </>
  )
}

export default CalendarSection
