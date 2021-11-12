import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '@Layout'
import { TermsConditions } from '@Components'
const TermsPage = () => {
  const data = useStaticQuery(graphql`
    query TermsConditions {
      contentfulTermsConditions {
        title
        content {
          raw
        }
      }
    }
  `)
  return (
    <Layout>
      <TermsConditions data={data} />
    </Layout>
  )
}

export default TermsPage
