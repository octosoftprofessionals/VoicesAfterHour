import React from 'react'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MicIcon from '@Assets/micIcon.svg'
import { colors, shadows, size, lineHeight, weight } from '@Styles'
import micIconico from '@Assets/micIconico.png'

const LandingBanner = ({ description, imageUrl }) => {
  const classes = useStyles({ imageUrl })
  return (
    <Grid container justifyContent="space-between" className={classes.root}>
      <Grid item xs={12} md={5} container justifyContent="center">
        <Hidden mdDown>
          <div className={classes.imageLeft} />
        </Hidden>
        <Grid item xs={11} md={9} container className={classes.boxTitles}>
          <Typography variant="h1" className={classes.firstTitle}>
            VOCES
          </Typography>
          <Grid container alignItems="center">
            <Typography variant="h1" className={classes.secundTitle}>
              AFTER HOURS
            </Typography>
            <MicIcon className={classes.icon} />
          </Grid>
          <Typography variant="h6" className={classes.description}>
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

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(14),
    columnGap: theme.spacing(6),
    paddingBottom: theme.spacing(4),
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
    letterSpacing: '0.7rem',
    lineHeight: lineHeight.m,
    [theme.breakpoints.down('sm')]: {
      fontSize: '26vw',
    },
  },
  secundTitle: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.HotPink,
    lineHeight: lineHeight.l,
    textShadow: `${shadows.textShadow1}, ${shadows.textShadow2}`,
    fontSize: '4.5vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12.5vw',
    },
  },
  description: {
    fontWeight: weight.m,
    color: colors.LightCyan,
    fontFamily: theme.typography.fontFamily[0],
  },
}))

export default LandingBanner
