import { ReactElement } from "react"
import { Metadata } from "next"
import { PageHeader } from "components/elements"
import SystemSection from "components/system-section"
import AccessSection from "components/access-section"
import ContactSection from "components/contact-section"

export const metadata: Metadata = {
  title: "利用案内・料金 - 秋葉原の作業できるカフェ",
  description:
    "FFFFF Cafeの料金・営業時間・支払い方法・設備・持ち込みルール。秋葉原駅徒歩3分、2時間500円からドロップインで作業できます。全席電源・Wi-Fi無料、モニター貸出あり。",
  alternates: { canonical: "/guide" },
  openGraph: { url: "/guide" },
}

const GuidePage = (): ReactElement => (
  <>
    <PageHeader
      label="GUIDE"
      title="利用案内・料金"
      lead="初めての方へ。料金、営業時間、設備、アクセスをまとめました。"
    />
    <SystemSection />
    <AccessSection />
    <ContactSection />
  </>
)

export default GuidePage
