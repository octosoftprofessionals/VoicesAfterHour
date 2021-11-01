import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const PodcastItems = ({ month, podcasts }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item container alignItems="flex-start">
        <Typography variant="h5" className={classes.month}>
          {month}
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className={classes.divCard}
      >
        {podcasts.map(({ node }, i) => (
          <PodcastItem node={node} />
        ))}
      </Grid>
      <Grid item container justify="center" className={classes.viewAll}>
        <Typography>{`View all ${month}`}</Typography>
      </Grid>
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
  },
}))

export default PodcastItems
