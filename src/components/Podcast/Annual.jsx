import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import PodcastItems from './PodcastItems'
import LoadMoreBtn from './LoadMoreBtn'

const PodcastsAnnual = ({ year, annualPodcasts }) => {
  const classes = useStyles()
  return (
    <Grid item container direction="column" className={classes.root}>
      <Grid item className={classes.year}>
        {year}
      </Grid>
      {annualPodcasts.map((monthsPodcasts, i) =>
        monthsPodcasts.map(({ month, podcasts }) => (
          <PodcastItems month={month} podcasts={podcasts} />
        ))
      )}
      <LoadMoreBtn />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(2),
  },
  year: {
    color: colors.HotPink,
    fontSize: '30px',
    fontWeight: 'bold',
  },
}))

export default PodcastsAnnual
