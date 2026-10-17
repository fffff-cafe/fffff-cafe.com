import { ReactElement } from "react"
import { Metadata } from "next"
import { PageHeader } from "components/elements"
import RentalSection from "components/rental-section"
import AccessSection from "components/access-section"
import ContactSection from "components/contact-section"

export const metadata: Metadata = {
  title: "貸切・会場利用 - 秋葉原の勉強会・LT会会場",
  description:
    "FFFFF Cafeは貸切で勉強会・LT会・ワークショップ・交流会の会場として利用できます。秋葉原駅徒歩3分、20席、電源・Wi-Fi・モニター完備。2時間6,000円から。",
  alternates: { canonical: "/rental" },
  openGraph: { url: "/rental" },
}

const RentalPage = (): ReactElement => (
  <>
    <PageHeader
      label="RENTAL"
      title="貸切・会場利用"
      lead="勉強会、LT会、ワークショップ、交流会の会場に。"
    />
    <RentalSection />
    <AccessSection />
    <ContactSection />
  </>
)

export default RentalPage
