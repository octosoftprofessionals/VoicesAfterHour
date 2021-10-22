import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, shadows, weight } from '@Styles'

const LoadMoreBtn = () => {
  const classes = useStyles()
  return (
    <Grid container item justifyContent="space-evenly">
      <Button className={classes.button} variant="contained">
        <Typography
          variant="button"
          color="textPrimary"
          className={classes.txtBtn}
        >
          Load more
        </Typography>
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  txtBtn: {
    padding: theme.spacing(2),
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: ({ btnTextColor }) => btnTextColor ?? colors.Tolopea,
  },
  button: {
    backgroundColor: ({ btnBackground }) => btnBackground ?? colors.AliceBlue,
    boxShadow: shadows.boxShadow2,
    borderRadius: theme.spacing(2),
    width: theme.spacing(48),
    height: theme.spacing(13),
  },
}))

export default LoadMoreBtn
