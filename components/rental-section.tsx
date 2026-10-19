import React, { ReactElement } from "react"
import { ButtonLink, InfoList, Section, SectionTitle, gridStyle } from "components/elements"
import { accentColorHex, monoFontFamily, paperColorHex } from "utils/constant"
import { lendingEquipment, rentalPlans, seats, twitterUrl } from "utils/info"

const uses = ["勉強会", "LT会", "ワークショップ", "交流会"]

const RentalSection = (): ReactElement => {
  return (
    <Section id="rental" dark>
      <SectionTitle label="Rental">
        貸切で、
        <br />
        イベント会場に。
      </SectionTitle>
      <p style={{ marginBottom: "1.5rem", maxWidth: "40em" }}>
        カフェ全体を貸切で利用できます。秋葉原駅から徒歩3分、電源・Wi-Fi完備の空間を、勉強会やLT会の会場にどうぞ。
      </p>
      <ul
        aria-label="利用用途の例"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: ".5rem",
          listStyle: "none",
          marginBottom: "2.5rem",
          padding: 0,
        }}
      >
        {uses.map((use) => (
          <li
            key={use}
            style={{
              background: accentColorHex,
              color: paperColorHex,
              fontWeight: 700,
              padding: ".3rem .8rem",
            }}
          >
            {use}
          </li>
        ))}
      </ul>
      <div style={{ ...gridStyle("300px"), gap: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>貸切料金</h3>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {rentalPlans.map(({ time, price }) => (
                <tr key={time} style={{ borderBottom: `1px solid ${paperColorHex}` }}>
                  <th scope="row" style={{ padding: ".7rem 0", textAlign: "left" }}>
                    {time}
                  </th>
                  <td
                    style={{
                      fontFamily: monoFontFamily,
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      textAlign: "right",
                    }}
                  >
                    {price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>設備・条件</h3>
          <InfoList
            items={[
              ["席数", seats],
              ["設備", `全席電源、Wi-Fi、${lendingEquipment.join("、")}`],
              ["申込期限", "利用日の3営業日前までにご連絡ください。"],
              ["申込方法", "X（Twitter）のDMでご連絡ください。"],
            ]}
          />
        </div>
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        <ButtonLink href={twitterUrl}>貸切の相談をする（X DM）</ButtonLink>
      </div>
    </Section>
  )
}

export default RentalSection
