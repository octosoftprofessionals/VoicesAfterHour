import React, { useState } from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import AnnualsPodcastsItems from './AnnualsPodcastsItems'
import LoadMoreBtn from './LoadMoreBtn'

const PodcastContainer = ({ podcasts }) => {
  const classes = useStyles()
  const [yearsLength, setYearsLength] = useState(1)
  const [monthsLength, setMonthsLength] = useState(3)
  const monthsPodcastsLength = []
  podcasts.forEach(({ annualPodcasts }) => {
    monthsPodcastsLength.push(annualPodcasts.length)
  })
  const handleLoadMore = () => {
    if (monthsPodcastsLength[yearsLength - 1] > monthsLength) {
      setMonthsLength(monthsLength + 3)
    } else {
      setYearsLength(yearsLength + 1)
      setMonthsLength(3)
    }
  }

  return (
    <Grid
      item
      xs={9}
      container
      direction="column"
      justify="center"
      className={classes.root}
    >
      {podcasts.slice(0, yearsLength).map(({ years, annualPodcasts }) => (
        <AnnualsPodcastsItems
          year={years}
          annualPodcasts={annualPodcasts}
          monthLength={monthsLength}
        />
      ))}
      <LoadMoreBtn
        handleLoadMore={handleLoadMore}
        status={podcasts.length - 1 >= yearsLength}
      />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(12),
    marginBottom: theme.spacing(20),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
}))

export default PodcastContainer
