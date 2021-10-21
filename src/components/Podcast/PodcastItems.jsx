import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'

import PodcastItem from './PodcastItem'

const PodcastItems = ({ month, podcasts }) => {
  const classes = useStyles()

  if (Array.isArray(podcasts)) {
    if (podcasts.length > 0) {
      return (
        <>
          <div className={classes.month}>{month}</div>
          <div className={classes.divCard}>
            {Array.isArray(podcasts) &&
              podcasts.map(({ node }, i) => <PodcastItem node={node} />)}
          </div>
        </>
      )
    }
  }
  return null
}

const useStyles = makeStyles((theme) => ({
  month: {
    color: colors.ColumbiaBlue,
    fontSize: '25px',
  },
  divCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default PodcastItems
