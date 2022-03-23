import React, { ReactElement } from "react"
import { Section, SectionTitle } from "components/elements"
import Styled from "styled-components"

const Table = Styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  max-width: 640px;
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
        <p>コーヒー1杯500円~で利用できる作業のできるカフェ</p>
        <Table>
          <tbody>
            <tr>
              <th>電源</th>
              <td>全席あります</td>
            </tr>
            <tr>
              <th>Wi-Fi</th>
              <td>あります</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  )
}

export default SystemSection
