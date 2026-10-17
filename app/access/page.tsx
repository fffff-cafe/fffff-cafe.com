import { ReactElement } from "react"
import { Metadata } from "next"
import { PageHeader } from "components/elements"
import AccessSection from "components/access-section"
import ContactSection from "components/contact-section"

export const metadata: Metadata = {
  title: "アクセス - 秋葉原駅徒歩3分",
  description:
    "FFFFF Cafeへのアクセス。東京都千代田区神田佐久間町3-37-1 山茂登ビル3F、秋葉原駅徒歩3分。営業時間と地図を掲載しています。",
  alternates: { canonical: "/access" },
  openGraph: { url: "/access" },
}

const AccessPage = (): ReactElement => (
  <>
    <PageHeader label="ACCESS" title="アクセス" lead="秋葉原駅から徒歩3分、山茂登ビル3階。" />
    <AccessSection />
    <ContactSection />
  </>
)

export default AccessPage
