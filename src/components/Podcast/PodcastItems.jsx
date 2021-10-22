import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const PodcastItems = ({ month, podcasts }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.month}>
        {month}
      </Grid>
      <Grid item className={classes.divCard}>
        {podcasts.map(({ node }, i) => (
          <PodcastItem node={node} />
        ))}
      </Grid>
      <Grid className={classes.viewAll}>
        <Typography>View all {month}</Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(8),
  },
  month: {
    color: colors.ColumbiaBlue,
    fontSize: '1.7rem',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  divCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: theme.spacing(6),
  },
  viewAll: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.HotPink,
    textDecoration: 'underline',
  },
}))

export default PodcastItems
