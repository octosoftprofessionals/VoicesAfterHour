import React from 'react'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MicIcon from '@Assets/micIcon.svg'
import { colors, shadows, size, lineHeight, weight } from '@Styles'
import micIconico from '@Assets/micIconico.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(6),
    columnGap: theme.spacing(6),
  },
  boxTitles: { position: 'relative', minHeight: '50vh' },
  imageLeft: {
    backgroundImage: `url(${micIconico})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    paddingBottom: '31vw',
    width: '31vw',
    left: '-15.5%',
  },
  imageRight: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '30vh',
  },
  icon: { fontSize: theme.typography.h3.fontSize },
  firstTitle: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    fontSize: size.xxl,
    lineHeight: lineHeight.m,
  },
  secundTitle: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.HotPink,
    lineHeight: lineHeight.l,
    textShadow: `${shadows.textShadow1}, ${shadows.textShadow2}`,
  },
  description: {
    fontWeight: weight.m,
    color: colors.LightCyan,
    fontFamily: theme.typography.fontFamily[0],
  },
}))

const LandingBanner = ({ description, imageUrl }) => {
  const classes = useStyles({ imageUrl })
  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={12} md={5} container justify="center">
        <Hidden mdDown>
          <div className={classes.imageLeft} />
        </Hidden>
        <Grid item xs={11} md={9} container className={classes.boxTitles}>
          <Typography variant="h1" className={classes.firstTitle}>
            VOICES
            <Grid container alignItems="center">
              <Typography variant="h1" className={classes.secundTitle}>
                AFTER HOUR
              </Typography>
              <MicIcon className={classes.icon} />
            </Grid>
          </Typography>
          <Typography variant="h5" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} container justify="center">
        <Grid item xs={10} className={classes.imageRight} />
      </Grid>
    </Grid>
  )
}

export default LandingBanner
