import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const SponsorsItem = ({ imageUrl }) => {
  const imageSponsor = imageUrl.file.url
  const classes = useStyles({ imageUrl: imageSponsor })
  return (
    <Grid
      container
      item
      md={3}
      sm={4}
      xs={6}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.image} xs={4} />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  image: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '30%',
  },
}))
export default SponsorsItem
