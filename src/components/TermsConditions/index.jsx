import React from 'react'

import { MainGrid, TitlePage, ContentHTML } from '@Components'
const TermsConditions = ({ data }) => {
  const {
    contentfulTermsConditions: {
      title,
      content: { raw },
    },
  } = data

  return (
    <MainGrid>
      <TitlePage title={title} showText />
      <ContentHTML content={raw} />
    </MainGrid>
  )
}

export default TermsConditions
