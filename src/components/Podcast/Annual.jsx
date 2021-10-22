import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import PodcastItems from './PodcastItems'

const PodcastsAnnual = ({ year, annualPodcasts }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <div className={classes.year}>{year}</div>
      {annualPodcasts.map((monthsPodcasts, i) =>
        monthsPodcasts.map(({ month, podcasts }) => (
          <PodcastItems month={month} podcasts={podcasts} />
        ))
      )}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  year: {
    color: colors.HotPink,
    fontSize: '30px',
    fontWeight: 'bold',
  },
}))

export default PodcastsAnnual
