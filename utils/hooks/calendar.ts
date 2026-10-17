import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import { GoogleCalendarEventItem, GoogleCalendarEventResponse } from "@types"

const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
const calendarId = "dbofsjce5m94lubjbq28bhn2o8@group.calendar.google.com"
const key = "AIzaSyAejTOmT5qkL3uTEYBA1eQup2WVbD7pjPY"

// イベント情報は Google カレンダーで一元管理。undefined = 読込中、null = 取得失敗
export const useCalendarEvents = (days: number) => {
  const [events, setEvents] = useState<GoogleCalendarEventItem[] | null>()

  useEffect(() => {
    const now = dayjs()
    axios
      .get<GoogleCalendarEventResponse>(`${baseUrl}/${calendarId}/events`, {
        params: {
          key,
          showDeleted: true,
          timeMin: now.format("YYYY-MM-DDT00:00:00[Z]"),
          timeMax: now.add(days, "day").format("YYYY-MM-DDT00:00:00[Z]"),
          orderBy: "startTime",
          singleEvents: true,
        },
      })
      .then(({ data }) =>
        setEvents(data.items.filter((item) => item.status == "confirmed"))
      )
      .catch(() => setEvents(null))
  }, [days])

  return events
}

// 説明文のあるものを公開イベントとして扱う（従来のカレンダー表示と同じ基準）
export const isPublicEvent = (event: GoogleCalendarEventItem) =>
  !!event.description

// 申込リンク（connpass）。Google のリダイレクト URL は q パラメータを展開する
export const applyLink = (html = "") =>
  [...html.matchAll(/href="([^"]+)"/g)]
    .map(([, href]) => {
      const url = href.replace(/&amp;/g, "&")
      try {
        return new URL(url).searchParams.get("q") || url
      } catch {
        return url
      }
    })
    .find((url) => url.includes("connpass.com"))

export const eventFee = (text: string) =>
  text.match(/(参加費|費用)\s*[:：]?\s*[^\n]+/)?.[0]

// 「## 概要」の本文を抜粋（なければ見出し以外の先頭）
export const eventSummary = (text: string, length = 100) => {
  const body = (text.split(/^##\s*概要\s*$/m)[1] ?? text)
    .split(/^#/m)[0]
    .replace(/\s+/g, " ")
    .trim()
  return body.length > length ? `${body.slice(0, length)}…` : body
}

export const plainText = (html = "") =>
  html
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim()
