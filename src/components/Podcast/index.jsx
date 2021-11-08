import React from 'react'

import { TitlePage, MainGrid } from '@Components'
import { podcastsPerYearList } from '@Utils'

import PodcastContainer from './PodcastContainer'

const Podcast = ({ data }) => {
  const {
    allContentfulPodcastPost: { edges: podcasts },
  } = data

  return (
    <MainGrid>
      <TitlePage title="Podcast" showText />
      <PodcastContainer podcasts={podcastsPerYearList(podcasts)} />
    </MainGrid>
  )
}

export default Podcast
