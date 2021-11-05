import React, { useState } from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import MonthsPodcastsItems from './MonthsPodcastsItems'
import LoadMoreBtn from './LoadMoreBtn'

const AnnualsPodcastsItems = ({ year, annualPodcasts }) => {
  const classes = useStyles()

  const [loadMonths, setLoadMonths] = useState({ status: true, length: 3 })

  const handleLoadMore = () => {
    if (loadMonths.status) {
      setLoadMonths({ status: false, length: 12 })
    } else {
      setLoadMonths({ status: true, length: 3 })
    }
  }

  return (
    <Grid item container direction="column" className={classes.root}>
      <Typography variant="h4" className={classes.year}>
        {year}
      </Typography>
      {annualPodcasts.map((monthsPodcasts) =>
        monthsPodcasts
          .slice(0, loadMonths.length)
          .map(({ month, podcasts }, i) => (
            <MonthsPodcastsItems
              month={month}
              podcasts={podcasts}
              key={`${month + i}`}
            />
          ))
      )}
      <LoadMoreBtn handleLoadMore={handleLoadMore} status={loadMonths.status} />
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
