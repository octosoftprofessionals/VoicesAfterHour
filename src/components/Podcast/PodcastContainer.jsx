import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'
import { LoadMoreBtn } from '@Components'
import { podcastsPerYearList, podcastsPerMonth } from '@Utils'

import PodcastItems from './PodcastItems'
import PodcastMonthly from './PodcastMonthly'

const PodcastContainer = ({ podcasts }) => {
  const podcastsPerYear = podcastsPerYearList(podcasts)

  const historyPodcasts = podcastsPerMonth(podcastsPerYear)
  console.log('historyPodcasts :>> ', historyPodcasts)
  const classes = useStyles()
  return (
    // <Grid container className={classes.root}>
    //   {podcastsPerYear.map((anualPodcast) => (
    //     <PodcastMonthly
    //       anualPodcast={anualPodcast}
    //       key={`${anualPodcast[0].year}`}
    //     />
    //   ))}

    //   <Grid>
    //     <Grid container xs={12} sm={12} justify={'center'}>
    //       {podcasts.map(({ node }) => (
    //         <PodcastItems
    //           title={node.title}
    //           description={node.description.description}
    //           coverImage={node.coverImage.file.url}
    //           youtubeUrl={node.youtubeUrl}
    //           spotifyUrl={node.spotifyUrl}
    //         />
    //       ))}
    //     </Grid>
    //   </Grid>

    //   <LoadMoreBtn></LoadMoreBtn>
    // </Grid>
    null
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    rowGap: theme.spacing(12),
    marginBottom: theme.spacing(20),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
}))

export default PodcastContainer
