import React from 'react'
import { TitlePage, MainGrid } from '@Components'

import Form from './Form'

const ContactUs = ({ data }) => {
  const {
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: { url },
          },
        },
      ],
    },
  } = data

  return (
    <MainGrid>
      <TitlePage title="Contact Us" />
      <Form imgUrl={url} />
    </MainGrid>
  )
}

export default ContactUs
