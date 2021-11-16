import React, { useState } from 'react'

import { Link } from 'gatsby'

import { Grid, Typography, Button, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

import IframeSpotify from './Iframe'

import YouTube from '@Assets/youtubeIcon.svg'
import Spotify from '@Assets/spotifyIcon.svg'
import { colors, shadows, weight, size } from '@Styles'

const Buttons = ({
  btnBackground,
  btnBackgroundHov,
  btnTextColor,
  justifyBtn,
  displayBtn,
  paddingTxtBtn,
  youtubeLink,
  spotifyLink,
  xsSpotifyBtn,
  smSpotifyBtn,
  xsYoutubeBtn,
  smYoutubeBtn,
  textBtn = [],
  linkHome,
  ...props
}) => {
  const classes = useStyles({
    btnBackground,
    btnBackgroundHov,
    btnTextColor,
    justifyBtn,
    displayBtn,
    paddingTxtBtn,
  })
  const [spotify, setSpotify] = useState(false)

  const handleOpen = () => {
    if (!linkHome) setSpotify(!spotify)
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
        xs={xsYoutubeBtn ?? 6}
        sm={smYoutubeBtn ?? 6}
        container
        alignItems="center"
        className={classes.boxBtn}
      >
        <Link to={youtubeLink} className={classes.link}>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<YouTube className={classes.icon} />}
          >
            <Hidden xsDown>
              <Typography
                variant="button"
                color="textPrimary"
                className={classes.txtBtn}
              >
                {textBtn[0] ?? 'VIEW ON YOUTUBE'}
              </Typography>
            </Hidden>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        xs={xsSpotifyBtn ?? 6}
        sm={smSpotifyBtn ?? 6}
        container
        alignItems="center"
        className={classes.boxBtn}
      >
        {spotify ? (
          spotifyLink && (
            <Grid item className={classes.boxIframe}>
              <Skeleton
                variant="rect"
                height={80}
                className={classes.skeleton}
              />
              <IframeSpotify spotifyLink={spotifyLink} setOpen={handleOpen} />
            </Grid>
          )
        ) : (
          <Link to={linkHome} className={classes.link}>
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<Spotify className={classes.icon} />}
              onClick={() => handleOpen()}
            >
              <Hidden xsDown>
                <Typography
                  variant="button"
                  color="textPrimary"
                  className={classes.txtBtn}
                >
                  {textBtn[1] ?? 'LISTEN ON SPOTIFY'}
                </Typography>
              </Hidden>
            </Button>
          </Link>
        )}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    '.MuiButton-startIcon': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(0),
      },
    },
  },
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
    padding: ({ paddingTxtBtn }) => paddingTxtBtn ?? 0,
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
    '&:hover': {
      backgroundColor: ({ btnBackgroundHov }) =>
        btnBackgroundHov ?? colors.WildStrawberry,
    },
  },
  link: { textDecoration: 'none' },
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}))

export default Buttons
