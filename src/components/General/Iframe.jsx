import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CancelOutlined } from '@material-ui/icons'
import { Grid, IconButton } from '@material-ui/core'

const IframeSpotify = ({ spotifyLink, setOpen, ...props }) => {
  const classes = useStyles()

  const expReg = new RegExp('open.spotify.com/([A-Za-z0-9_]+)/([A-Za-z0-9_]+)')
  const match = spotifyLink.match(expReg)

  const trackRef = `${match[1]}/${match[2]}`
  return (
    <Grid container className={classes.root}>
      <iframe
        src={`https://open.spotify.com/embed/${trackRef}`}
        className={classes.cardMediaS}
        {...props}
      />
      <IconButton className={classes.closeButton} onClick={setOpen}>
        <CancelOutlined className={classes.icon} />
      </IconButton>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    flex: 1,
  },
  cardMediaS: {
    width: '100%',
    height: 80,
    border: 'none',
    overflow: 'hidden',
    borderRadius: 6,
  },
  closeButton: { position: 'absolute', top: -12, right: -24, padding: 0 },
  icon: { color: theme.palette.common.white },
}))

export default IframeSpotify
