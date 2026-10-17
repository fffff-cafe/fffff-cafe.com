import React, { ReactElement } from "react"
import { ButtonLink, InfoList, Section, SectionTitle, gridStyle } from "components/elements"
import { inkColorHex } from "utils/constant"
import { access, address, mapEmbedUrl, mapUrl, openingHours } from "utils/info"

const AccessSection = (): ReactElement => {
  return (
    <Section id="access">
      <SectionTitle label="Access">アクセス</SectionTitle>
      <div style={{ ...gridStyle("300px"), gap: "2rem" }}>
        <div>
          <InfoList
            items={[
              ["所在地", address],
              ["最寄り駅", access],
              ["入口", "山茂登ビルの3階です。"],
              [
                "営業時間",
                openingHours.map(({ label, opens, closes }) => (
                  <span key={label} style={{ display: "block" }}>
                    {label} {opens} – {closes}
                  </span>
                )),
              ],
            ]}
          />
          <div style={{ marginTop: "1.5rem" }}>
            <ButtonLink href={mapUrl} variant="ink">
              Googleマップで開く
            </ButtonLink>
          </div>
        </div>
        <iframe
          src={mapEmbedUrl}
          width="600"
          height="450"
          style={{
            border: `2px solid ${inkColorHex}`,
            height: "auto",
            aspectRatio: "4 / 3",
            width: "100%",
          }}
          allowFullScreen={true}
          loading="lazy"
          title="FFFFF Cafe の地図"
        />
      </div>
    </Section>
  )
}

export default AccessSection
