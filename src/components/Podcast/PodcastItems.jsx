import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const PodcastItems = ({ month, podcasts }) => {
  const classes = useStyles()

  if (Array.isArray(podcasts)) {
    if (podcasts.length > 0) {
      return (
        <Grid className={classes.root}>
          <Grid container className={classes.month}>
            {month}
          </Grid>
          <Grid item className={classes.divCard}>
            {Array.isArray(podcasts) &&
              podcasts.map(({ node }, i) => <PodcastItem node={node} />)}
          </Grid>
        </Grid>
      )
    }
  }
  return null
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(4),
  },
  month: {
    color: colors.ColumbiaBlue,
    fontSize: '1.7rem',
  },
  divCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: theme.spacing(6),
  },
}))

export default PodcastItems
