import React, { useState } from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Iframe from './Iframe'

import YouTube from '@Assets/youtubeIcon.svg'
import Spotify from '@Assets/spotifyIcon.svg'
import { colors, shadows, weight } from '@Styles'

const Buttons = ({ btnBackground, btnTextColor, mdWidth, spotifyLink }) => {
  const classes = useStyles({ btnBackground, btnTextColor })
  const [open, setOpen] = useState(false)
  return (
    <Grid
      item
      xs={10}
      md={mdWidth ?? 5}
      container
      justifyContent="space-evenly"
    >
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
      <Iframe spotifyLink={spotifyLink} />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  txtBtn: {
    padding: theme.spacing(2),
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: ({ btnTextColor }) => btnTextColor ?? colors.Tolopea,
  },
  button: {
    backgroundColor: ({ btnBackground }) => btnBackground ?? colors.HotPink,
    boxShadow: shadows.boxShadow4,
    borderRadius: theme.spacing(2),
  },
}))

export default Buttons
