export type GoogleCalendarEventResponse = {
  kind: "calendar#events"
  etag: string
  summary: string
  timeZone: string
  nextSyncToken: string
  items: GoogleCalendarEventItem[]
}

export type GoogleCalendarEventItem = {
  kind: string
  etag: string
  id: string
  status: "confirmed"
  htmlLink: string
  created: string
  updated: string
  summary: string
  start: DateTimeObject
  end: DateTimeObject
  description?: string
}

type DateTimeObject = {
  dateTime: string
  timeZone: string
}
