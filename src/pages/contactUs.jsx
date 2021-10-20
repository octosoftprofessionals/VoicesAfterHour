import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@Layout'
import { ContactUs } from '@Components'

const ContactUsPage = () => {
  const data = useStaticQuery(graphql`
    query ContactUs {
      allContentfulAsset(filter: { title: { eq: "contactUs" } }) {
        edges {
          node {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ContactUs data={data} />
    </Layout>
  )
}

export default ContactUsPage
