import React from 'react'
import Layout from '@Layout'
import { AboutUs } from '@Components'
import { useStaticQuery, graphql } from 'gatsby'

const AboutUsPage = () => {
  const data = useStaticQuery(graphql`
    query AboutUs {
      allContentfulAsset(filter: { title: { eq: "aboutUs" } }) {
        edges {
          node {
            file {
              url
            }
            title
          }
        }
      }
      allContentfulPerson {
        edges {
          node {
            image {
              file {
                url
              }
            }
            name
            title
            shortBio {
              shortBio
            }
          }
        }
      }
      allContentfulAboutUs {
        edges {
          node {
            title
            description {
              description
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <AboutUs data={data} />
    </Layout>
  )
}

export default AboutUsPage
