import React, { useState } from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Iframe from './Iframe'

import YouTube from '@Assets/youtubeIcon.svg'
import Spotify from '@Assets/spotifyIcon.svg'
import { colors, shadows, weight, size } from '@Styles'

const Buttons = ({
  btnBackground,
  btnTextColor,
  justifyBtn,
  spotifyLink,
  ...props
}) => {
  const classes = useStyles({ btnBackground, btnTextColor, justifyBtn })
  return (
    <Grid item xs={10} lg={5} container justify="space-evenly" {...props}>
      <Grid item xs={6} container className={classes.boxBtn}>
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
      <Grid item xs={6} container className={classes.boxBtn}>
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
      {spotifyLink && <Iframe spotifyLink={spotifyLink} />}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  boxBtn: { justifyContent: ({ justifyBtn }) => justifyBtn ?? 'center' },
  txtBtn: {
    padding: theme.spacing(2),
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: ({ btnTextColor }) => btnTextColor ?? colors.Tolopea,
    [theme.breakpoints.down('sm')]: {
      fontSize: size.xs,
    },
  },
  button: {
    backgroundColor: ({ btnBackground }) => btnBackground ?? colors.HotPink,
    boxShadow: shadows.boxShadow4,
    borderRadius: theme.spacing(2),
  },
}))

export default Buttons
