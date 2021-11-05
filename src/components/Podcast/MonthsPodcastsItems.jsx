import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const MonthsPodcastsItems = ({ month, podcasts }) => {
  const classes = useStyles()
  const [loadMonths, setLoadMonths] = useState({ status: true, length: 3 })

  const handleLoadMoreMonths = () => {
    if (loadMonths.status) {
      setLoadMonths({ status: false, length: podcasts.length })
    } else {
      setLoadMonths({ status: true, length: 3 })
    }
  }
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
        {podcasts.slice(0, loadMonths.length).map(({ node }, i) => (
          <PodcastItem node={node} key={`${node.title + i}`} />
        ))}
      </Grid>
      <Grid item container justify="center">
        <Button variant="text" onClick={handleLoadMoreMonths}>
          <Typography variant="h6" className={classes.viewAll}>
            {loadMonths.status ? `View all ${month}` : `Show less ${month}`}
          </Typography>
        </Button>
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
    textTransform: 'capitalize',
    letterSpacing: '0.05rem',
    fontWeight: 'bold',
  },
}))

export default MonthsPodcastsItems
