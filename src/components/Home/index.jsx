import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Typography variant="h2" className={classes.root}>
        Home
      </Typography>
    </Grid>
  )
}

export default Home
