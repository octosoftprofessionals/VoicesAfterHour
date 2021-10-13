import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ScrollIcon from '@Assets/scrollIcon.svg'
import MicIcon from '@Assets/micIcon.svg'

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(src/assets/micIconico.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '50%',
  },
  title: {},
  description: {},
}))

const LandingBanner = ({ description }) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} sm={6} className={classes.image}>
        <Typography variant="h1" className={classes.title}>
          VOICES
        </Typography>
        <Typography variant="h3" className={classes.title}>
          AFTER HOUR
          <MicIcon />
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12}>
        <ScrollIcon />
      </Grid>
    </Grid>
  )
}

export default LandingBanner
