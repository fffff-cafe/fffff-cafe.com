import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"

const Table = Styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  max-width: 840px;
  width: 100%;
  tr {
    border-bottom: solid 1px #f0f0f0;
    td {
      padding: .5rem;
    }
  }
`

const SystemSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>FFFFF Cafeの利用について</SectionTitle>
        <p>
          コーヒー1杯500円~で利用できる作業のできるカフェです（ドロップイン利用のコワーキングスペース）。
          <br />
          ドリンクの注文はお願いしていますが、食事の持ち込み自由です。
        </p>
        <Table>
          <tbody>
            <tr>
              <th>営業時間</th>
              <td>平日 13:00 ~ 21:00</td>
            </tr>
            <tr>
              <th>席数</th>
              <td>10席</td>
            </tr>
            <tr>
              <th>電源</th>
              <td>全席完備</td>
            </tr>
            <tr>
              <th>Wi-Fi</th>
              <td>無料</td>
            </tr>
            <tr>
              <th>貸出設備</th>
              <td>モニター、充電ケーブル</td>
            </tr>
            <tr>
              <th>会議室利用</th>
              <td>500円 / 1h（3F 1~2名）</td>
            </tr>
            <tr>
              <th>貸切利用</th>
              <td>3h: 4,000円 / 1d: 10,000円</td>
            </tr>
          </tbody>
        </Table>
        <p>
          クレジットカード・電子マネー（交通系IC、QUIC
          Pay、iD、PayPay）のみの決済になります。（現金不可）
        </p>
      </Section>
    </>
  )
}

export default SystemSection
