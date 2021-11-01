import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import Annual from './Annual'

const PodcastContainer = ({ podcasts }) => {
  console.log('podcasts :>> ', podcasts)
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={9} container direction="column" justify="center">
        {podcasts.map(({ years, annualPodcasts }) => (
          <Annual year={years} annualPodcasts={annualPodcasts} />
        ))}
      </Grid>
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
