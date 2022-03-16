import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const CalendarSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>営業カレンダー</SectionTitle>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showNav=0&showPrint=0&showTabs=0&mode=AGENDA&showCalendars=0&showTz=0&showDate=0&showTitle=0&src=ZGJvZnNqY2U1bTk0bHViamJxMjhiaG4ybzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
          style={{ border: "none" }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="calendar"
        ></iframe>
      </Section>
    </>
  )
}

export default CalendarSection
