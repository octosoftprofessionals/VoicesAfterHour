import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  image: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '50%',
  },
}))

const SponsorsItem = ({ sponsorName, imageUrl }) => {
  const classes = useStyles({ imageUrl })
  return (
    <Grid
      container
      item
      md={3}
      sm={4}
      xs={6}
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.image} xs={4} />

      <Grid item xs={7}>
        <Typography variant="h2">{sponsorName}</Typography>
      </Grid>
    </Grid>
  )
}

export default SponsorsItem
