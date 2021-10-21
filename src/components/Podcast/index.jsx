import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'
import { TitlePage, MainGrid } from '@Components'

import PodcastContainer from './PodcastContainer'

const Podcast = ({ data }) => {
  const {
    allContentfulPodcastPost: { edges: podcasts },
  } = data

  const classes = useStyles()
  return (
    <MainGrid>
      <TitlePage title="Podcast" showText />
      <Grid
        container
        xs={12}
        sm={12}
        justify={'center'}
        className={classes.root}
      >
        <PodcastContainer podcasts={podcasts} />
      </Grid>
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(6),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
}))

export default Podcast
