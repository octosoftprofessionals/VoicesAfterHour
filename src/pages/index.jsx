import React from 'react'

import Layout from '@Layout'
import {Home} from '@Components'
import { useStaticQuery, graphql } from 'gatsby'

const HomePage = (props) => {
  const data = useStaticQuery(graphql`
    query Home {
      allContentfulAsset {
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
      <Home data={data} />
    </Layout>
  )
}

export default HomePage
