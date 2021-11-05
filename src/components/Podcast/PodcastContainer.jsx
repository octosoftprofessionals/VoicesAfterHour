import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import AnnualsPodcastsItems from './AnnualsPodcastsItems'

const PodcastContainer = ({ podcasts }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      xs={9}
      container
      direction="column"
      justify="center"
      className={classes.root}
    >
      {podcasts.map(({ years, annualPodcasts }) => (
        <AnnualsPodcastsItems year={years} annualPodcasts={annualPodcasts} />
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
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
