import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import YouTube from '@Assets/youtubeIcon.svg'
import Spotify from '@Assets/spotifyIcon.svg'
import { colors, shadows, weight } from '@Styles'
const Podcast = ({ title, description, link }) => {
  const classes = useStyles()
  return (
    <Grid item container justifyContent="center" className={classes.root}>
      <Grid item xs={10} md={8} container justifyContent="center">
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description} variant="h6">
          {`${description} `}
          <Link to={link} className={classes.link}>
            {'Learn more.'}
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={10} md={5} container justifyContent="space-evenly">
        <Grid item xs={5} md={6} container justifyContent="center">
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<YouTube />}
          >
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.txtBtn}
            >
              {'VIEW ON YOUTUBE'}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={5} md={6} container justifyContent="center">
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<Spotify />}
          >
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.txtBtn}
            >
              {'LISTEN ON SPOTIFY'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(10) },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    textDecoration: 'underline',
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
    paddingBottom: theme.spacing(2),
  },
  description: {
    letterSpacing: '0.05rem',
    color: colors.LightCyan,
    paddingBottom: theme.spacing(2.5),
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
  },
  link: {
    color: 'inherit',
  },
  txtBtn: {
    padding: theme.spacing(2),
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: colors.Tolopea,
  },
  button: {
    backgroundColor: colors.HotPink,
    boxShadow: shadows.boxShadow4,
    borderRadius: theme.spacing(2),
  },
}))

export default Podcast
