import React, { ReactElement } from "react"
import Link from "next/link"
import { InfoList, Section, SectionTitle, gridStyle } from "components/elements"
import { accentColorHex, inkColorHex, monoFontFamily } from "utils/constant"
import {
  dropInPrice,
  lendingEquipment,
  openingHours,
  paymentMethods,
  seats,
  twitterUrl,
} from "utils/info"

const SystemSection = (): ReactElement => {
  return (
    <Section id="guide">
      <SectionTitle label="Guide">利用案内・料金</SectionTitle>
      <div style={{ ...gridStyle("300px"), gap: "2rem", marginBottom: "3rem" }}>
        <div
          style={{
            background: accentColorHex,
            border: `2px solid ${inkColorHex}`,
            padding: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem" }}>料金（ドロップイン）</h3>
          <p
            style={{
              fontSize: "clamp(2rem, 7vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              margin: ".5rem 0",
            }}
          >
            {dropInPrice}
          </p>
          <p style={{ fontSize: ".9rem" }}>
            作業のできるカフェ（ドロップイン利用のコワーキングスペース）です。定期利用は応相談。
          </p>
        </div>
        <div
          style={{
            background: inkColorHex,
            color: "#fff",
            padding: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem" }}>営業時間</h3>
          <dl style={{ fontFamily: monoFontFamily, margin: ".75rem 0" }}>
            {openingHours.map(({ label, opens, closes }) => (
              <div
                key={label}
                style={{ display: "flex", flexWrap: "wrap", gap: "0 1rem" }}
              >
                <dt style={{ fontWeight: 700, minWidth: "6em" }}>{label}</dt>
                <dd style={{ fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>
                  {opens} – {closes}
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ fontSize: ".9rem" }}>
            営業日・イベントは
            <Link href="/events#calendar" style={{ color: accentColorHex }}>
              営業カレンダー
            </Link>
            でご確認ください。
          </p>
        </div>
      </div>
      <div id="equipment" style={{ scrollMarginTop: "6rem" }}>
        <InfoList
          items={[
            ["支払い方法", `${paymentMethods}のみ。現金はご利用いただけません。`],
            ["利用方法", "ドロップインでご利用いただけます。"],
            ["席数", seats],
            ["電源", "全席完備"],
            ["Wi-Fi", "無料"],
            [
              "無料貸出設備",
              `${lendingEquipment.join("、")}（数量限定・先着順）`,
            ],
            ["飲食物の持ち込み", "食事の持ち込みは自由です。"],
            ["定期利用", "応相談"],
            [
              "貸切利用",
              <Link key="rental" href="/rental">
                貸切・会場利用の案内へ →
              </Link>,
            ],
          ]}
        />
      </div>
      <p style={{ fontSize: ".9rem", marginTop: "1.5rem" }}>
        ご不明な点は
        <a href={twitterUrl} target="_blank" rel="noreferrer">
          X（Twitter）のDM
        </a>
        からお問い合わせください。
      </p>
    </Section>
  )
}

export default SystemSection
