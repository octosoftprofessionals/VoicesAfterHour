import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardMediaS: {
    width: 300,
    height: 80,
    border: 'none',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardMediaL: {
    height: 380,
    borderRadius: 20,
  },
}))

const Iframe = ({ spotifyLink, ...props }) => {
  const classes = useStyles()

  const expReg = new RegExp('open.spotify.com/([A-Za-z0-9_]+)/([A-Za-z0-9_]+)')
  const match = spotifyLink.match(expReg)

  const trackRef = `${match[1]}/${match[2]}`
  return (
    <iframe
      {...props}
      src={`https://open.spotify.com/embed/${trackRef}`}
      className={
        match[1] == 'playlist' ? classes.cardMediaL : classes.cardMediaS
      }
    ></iframe>
  )
}

export default Iframe
