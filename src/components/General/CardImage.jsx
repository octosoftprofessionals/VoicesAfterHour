import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, CardMedia } from '@material-ui/core'

const CardImage = ({ imageUrl, minHeight, paddingBottom, ...props }) => {
  const classes = useStyles({ minHeight, paddingBottom })

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item xs={10} container justifyContent="center">
        <CardMedia className={classes.media} image={imageUrl} {...props} />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    backgroundSize: 'contain',
    minHeight: ({ minHeight }) => minHeight ?? '63vh',
    paddingBottom: ({ paddingBottom }) => paddingBottom ?? 'none',
  },
}))

export default CardImage
