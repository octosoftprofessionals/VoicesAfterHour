import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const CardImage = ({ imageUrl }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} />
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    width: '100%',
    height: 'auto',
    paddingTop: '56.25%', // 16:9
  },
}))

export default CardImage
