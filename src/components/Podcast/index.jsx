import React from 'react'
import { TitlePage, MainGrid } from '@Components'

const Podcast = ({ data }) => {
  const {
    allContentfulPodcastPost: { edges: podcasts },
  } = data
  console.log('data :>> ', podcasts)
  return (
    <MainGrid>
      <TitlePage title="Podcast" showText />
    </MainGrid>
  )
}

export default Podcast
