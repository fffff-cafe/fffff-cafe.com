import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"

const SystemSection = (): ReactElement => {
  return (
    <>
      <Section>
        <SectionTitle>FFFFF Cafeの利用について</SectionTitle>
        <p>
          500円~で利用できる作業のできるカフェです（ドロップイン利用のコワーキングスペース）。
          <br />
          食事の持ち込みは自由です。
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            margin: "1rem auto",
            maxWidth: "840px",
            width: "100%",
          }}
        >
          <tbody>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>営業時間</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                平日 15:00 ~ 21:00 (L.O. 20:00)
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>席数</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                20席
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>電源</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                全席完備
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>Wi-Fi</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                無料
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>無料貸出設備 ※1</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                充電ケーブル、モニター、ホワイトボード
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>貸切利用 ※2</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                <p>3hours: 8,000円</p>
                <p>4hours: 10,000円</p>
                <p>6hours: 12,000円</p>
                <p>1day: 20,000円</p>
              </td>
            </tr>
            <tr
              style={{
                borderBottom: "solid 1px #f0f0f0",
              }}
            >
              <th>定期利用</th>
              <td
                style={{
                  padding: ".5rem",
                }}
              >
                応相談
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          クレジットカード・電子マネー（交通系IC、QUIC
          Pay、iD、PayPay）のみの決済になります。（現金不可）
        </p>
        <p>
          ※1 数量限定 先着順
          <br />
          ※4 カフェの貸切利用 3営業日前までにご連絡ください
        </p>
      </Section>
    </>
  )
}

export default SystemSection
