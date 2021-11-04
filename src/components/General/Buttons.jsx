import React, { useState } from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

import IframeSpotify from './Iframe'

import YouTube from '@Assets/youtubeIcon.svg'
import Spotify from '@Assets/spotifyIcon.svg'
import { colors, shadows, weight, size } from '@Styles'

const Buttons = ({
  btnBackground,
  btnTextColor,
  justifyBtn,
  displayBtn,
  youtubeLink,
  spotifyLink,
  textBtn = [],
  ...props
}) => {
  const classes = useStyles({
    btnBackground,
    btnTextColor,
    justifyBtn,
    displayBtn,
  })
  const [spotify, setSpotify] = useState(false)
  const handleOpen = () => {
    setSpotify(!spotify)
  }
  return (
    <Grid
      item
      container
      justify="space-evenly"
      className={classes.root}
      {...props}
    >
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        className={classes.boxBtn}
      >
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
            {textBtn[0] ?? 'VIEW ON YOUTUBE'}
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        className={classes.boxBtn}
      >
        {spotify ? (
          spotifyLink && (
            <Grid item className={classes.boxIframe}>
              <Skeleton
                variant="rect"
                width={'100%'}
                height={80}
                className={classes.skeleton}
              />
              <IframeSpotify spotifyLink={spotifyLink} setOpen={handleOpen} />
            </Grid>
          )
        ) : (
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<Spotify />}
            onClick={() => handleOpen()}
          >
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.txtBtn}
            >
              {textBtn[1] ?? 'LISTEN ON SPOTIFY'}
            </Typography>
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {},
  boxBtn: {
    justifyContent: ({ justifyBtn }) => justifyBtn ?? 'center',
    position: 'relative',
  },
  boxIframe: {
    borderRadius: theme.spacing(1),
    width: '100%',
  },
  skeleton: { position: 'absolute', borderRadius: 4, width: '100%', zIndex: 1 },
  txtBtn: {
    padding: 0,
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
    padding: theme.spacing(2, 6.5),
  },
}))

export default Buttons
