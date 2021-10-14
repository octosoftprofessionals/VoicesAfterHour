import React from 'react'

import Layout from '@Layout'
import Home from '@Components/Home'
import { useStaticQuery, graphql } from 'gatsby'
const HomePage = (props) => {
  const data = useStaticQuery(graphql`
    query Home {
      allContentfulAsset {
        edges {
          node {
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
      <Home data={data} />
    </Layout>
  )
}

export default HomePage
