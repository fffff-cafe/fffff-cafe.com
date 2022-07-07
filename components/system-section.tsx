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
          ご利用の際は必ずドリンクの注文をお願いします。食事の持ち込みは自由です。
        </p>
        <Table>
          <tbody>
            <tr>
              <th>営業時間</th>
              <td>平日 13:00 ~ 21:00 (L.O. 20:00)</td>
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
              <th>無料貸出設備 ※1</th>
              <td>充電ケーブル、モニター、ホワイトボード</td>
            </tr>
            <tr>
              <th>会議室利用 ※2</th>
              <td>1h: 500円</td>
            </tr>
            <tr>
              <th>貸切利用 ※3</th>
              <td>3h: 4,000円 / 1d: 10,000円</td>
            </tr>
          </tbody>
        </Table>
        <p>
          クレジットカード・電子マネー（交通系IC、QUIC
          Pay、iD、PayPay）のみの決済になります。（現金不可）
        </p>
        <p>
          ※1 数量限定 先着順
          <br />
          ※2 別室の貸切利用 1〜2名 1室のみ 先着順
          <br />
          ※3 カフェの貸切利用 3営業日前までにご連絡ください
        </p>
      </Section>
    </>
  )
}

export default SystemSection
