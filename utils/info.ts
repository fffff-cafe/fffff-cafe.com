// 店舗情報の一元管理。表示・メタ情報・構造化データはすべてここを参照する
export const siteUrl = "https://fffff-cafe.com"
export const siteName = "FFFFF Cafe"
export const siteDescription =
  "秋葉原駅徒歩3分、全席電源・Wi-Fi完備の作業できるカフェ。2時間500円からドロップインで利用でき、もくもく会や勉強会も開催。貸切でイベント会場としても使えます。"

export const address = "東京都千代田区神田佐久間町3-37-1 山茂登ビル3F"
export const access = "秋葉原駅 徒歩3分"

export const openingHours = [
  { label: "月・火・水", days: ["Monday", "Tuesday", "Wednesday"], opens: "15:00", closes: "20:00" },
  { label: "木・金", days: ["Thursday", "Friday"], opens: "15:00", closes: "21:00" },
]

export const dropInPrice = "2時間 500円〜"
export const seats = "20席"
export const lendingEquipment = ["充電ケーブル", "モニター", "ホワイトボード"]
export const paymentMethods =
  "クレジットカード・電子マネー（交通系IC、QUICPay、iD、PayPay）"

export const rentalPlans = [
  { time: "2時間", price: "6,000円" },
  { time: "3時間", price: "8,000円" },
  { time: "4時間", price: "10,000円" },
  { time: "6時間", price: "12,000円" },
  { time: "1日", price: "20,000円" },
]

export const twitterUrl = "https://twitter.com/fffff_cafe"
export const slackUrl =
  "https://join.slack.com/t/fffff-81d6773/shared_invite/zt-1d2ozux7o-F2O5pNC5vmXzt1Allox2xQ"
export const githubUrl = "https://github.com/fffff-cafe/fffff-cafe.com"
export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0769926028181!2d139.7681477292236!3d35.694038298761974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfc0ee3f1df%3A0x1c3b10dcfccc957b!2sFFFFF%20Cafe!5e0!3m2!1sja!2sjp!4v1647426190796!5m2!1sja!2sjp"
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=FFFFF+Cafe+秋葉原"

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/images/cover.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "千代田区",
    streetAddress: "神田佐久間町3-37-1 山茂登ビル3F",
  },
  openingHoursSpecification: openingHours.map(({ days, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days,
    opens,
    closes,
  })),
  paymentAccepted: "Credit Card, Electronic Money",
  sameAs: [twitterUrl],
}
