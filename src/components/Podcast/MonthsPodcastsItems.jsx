import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const MonthsPodcastsItems = ({ month, podcasts }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid container alignItems="flex-start">
        <Typography variant="h5" className={classes.month}>
          {month}
        </Typography>
      </Grid>
      <Grid container className={classes.divCard}>
        {podcasts.map(({ node }, i) => (
          <PodcastItem node={node} />
        ))}
      </Grid>
      <Button variant="text">
        <Typography
          variant="h6"
          className={classes.viewAll}
        >{`View all ${month}`}</Typography>
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(8),
  },
  month: {
    color: colors.ColumbiaBlue,
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  divCard: {
    rowGap: theme.spacing(6),
  },
  viewAll: {
    color: colors.HotPink,
    textDecoration: 'underline',
    textTransform: 'capitalize',
    letterSpacing: '0.05rem',
    fontWeight: 'bold',
  },
}))

export default MonthsPodcastsItems
