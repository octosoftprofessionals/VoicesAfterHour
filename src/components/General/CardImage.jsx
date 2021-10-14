import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, CardMedia } from '@material-ui/core'

const CardImage = ({ imageUrl }) => {
  const classes = useStyles()

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item xs={10}>
        <CardMedia className={classes.media} image={imageUrl} />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    height: 'auto',
    backgroundSize: 'contain',
    minHeight: '50vh',
  },
}))

export default CardImage
