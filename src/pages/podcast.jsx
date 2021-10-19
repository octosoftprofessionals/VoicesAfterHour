import React from 'react'
import Layout from '@Layout'
import { Podcast } from '@Components'
import { useStaticQuery, graphql } from 'gatsby'

const PodcastPage = () => {
  const data = useStaticQuery(graphql`
    query Podcast {
      allContentfulPodcastPost {
        edges {
          node {
            order
            title
            coverImage {
              file {
                url
              }
            }
            youtubeUrl
            spotifyUrl
            creationDate
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
      <Podcast data={data} />
    </Layout>
  )
}

export default PodcastPage
