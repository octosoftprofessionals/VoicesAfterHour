import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import { IconButton } from '@material-ui/core'

const Iframe = ({ spotifyLink, ...props }) => {
  const classes = useStyles()

  const expReg = new RegExp('open.spotify.com/([A-Za-z0-9_]+)/([A-Za-z0-9_]+)')
  const match = spotifyLink.match(expReg)

  const trackRef = `${match[1]}/${match[2]}`
  return (
    <div className={classes.root}>
      <iframe
        src={`https://open.spotify.com/embed/${trackRef}`}
        className={
          match[1] === 'playlist' ? classes.cardMediaL : classes.cardMediaS
        }
        {...props}
      />
      <IconButton className={classes.closeButton}>
        <CancelOutlinedIcon />
      </IconButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
  },
  cardMediaS: {
    width: '100%',
    height: 80,
    border: 'none',
    overflow: 'hidden',
    borderRadius: 6,
  },
  cardMediaL: {
    height: 380,
    borderRadius: 6,
  },
  closeButton: {
    background: 'none',
    borderStyle: 'none',
    color: 'white',
    width: 24,
    height: 24,
    display: 'contents',
  },
}))

export default Iframe
