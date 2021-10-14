import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const SponsorsItem = ({ sponsorName, imageUrl }) => {
  const imageSponsor = imageUrl.file.url
  const classes = useStyles({ imageUrl: imageSponsor })
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

      <Grid item xs={7} className={classes.boxText}>
        <Typography variant="h6" color="primary" className={classes.title}>
          {sponsorName}
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '50%',
  },
  boxText: {
    overflowWrap: 'break-word',
  },
}))
export default SponsorsItem
