import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import SocialIcons from './SocialIcons'

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    background: '#1d2178',
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    minHeight: `${theme.spacing(3)}vh`,
    rowGap: theme.spacing(4),
    columnGap: theme.spacing(4),
  },
  bottomText: {
    color: theme.palette.common.white,
    textAlign: 'center',
  },
}))

const FooterBottom = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      wrap="wrap"
      className={classes.bottomBar}
    >
      <Grid item xs={12} sm={3} container justify="center">
        <Typography variant="body1" className={classes.bottomText}>
          Reprehenderit cillum minim exercitation commodo nisi dolor in aliqua
          adipisicing.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} container justify="center">
        <Typography variant="body1" className={classes.bottomText}>
          Email: info@octosoftprofessionals.com
        </Typography>
      </Grid>
      <SocialIcons />
    </Grid>
  )
}

export default FooterBottom
