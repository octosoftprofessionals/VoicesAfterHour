import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'
import { LoadMoreBtn } from '@Components'

import Annual from './Annual'

const PodcastContainer = ({ podcasts }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid>
        <Grid container xs={12} sm={12} justify={'center'}>
          {podcasts.map(({ years, annualPodcasts }) => (
            <Annual year={years} annualPodcasts={annualPodcasts} />
          ))}
        </Grid>
      </Grid>

      <LoadMoreBtn />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
