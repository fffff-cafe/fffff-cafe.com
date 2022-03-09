import React from "react"
import CoverImageSection from "components/cover-image-section"
import ConceptSection from "components/concept-section"
import SystemSection from "components/system-section"

const IndexPage = (): React.ReactElement => {
  return (
    <>
      <CoverImageSection />
      <ConceptSection />
      <SystemSection />
    </>
  )
}

export default IndexPage
