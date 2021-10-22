import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import PodcastItems from './PodcastItems'

const PodcastMonthly = ({ anualPodcast }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      {anualPodcast.map((item, i) =>
        i == 0 ? (
          <div className={classes.year}>{item.year}</div>
        ) : (
          <PodcastItems
            month={item.month}
            podcasts={item.podcasts}
            key={`${item.month}`}
          />
        )
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

export default PodcastMonthly
