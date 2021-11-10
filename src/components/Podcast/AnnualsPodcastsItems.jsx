import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import MonthsPodcastsItems from './MonthsPodcastsItems'

const AnnualsPodcastsItems = ({ year, annualPodcasts, monthLength }) => {
  const classes = useStyles()

  return (
    <Grid item container direction="column" className={classes.root}>
      <Typography variant="h4" className={classes.year}>
        {year}
      </Typography>
      {annualPodcasts.slice(0, monthLength).map(({ month, podcasts }, i) => (
        <MonthsPodcastsItems
          month={month}
          podcasts={podcasts}
          key={`${month + i}`}
        />
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(2),
  },
  year: {
    color: colors.HotPink,
    fontWeight: 'bold',
    letterSpacing: '0.05rem',
  },
}))

export default AnnualsPodcastsItems
