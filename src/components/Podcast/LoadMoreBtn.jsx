import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, shadows } from '@Styles'

const LoadMoreBtn = ({ handleLoadMore, status }) => {
  const classes = useStyles({ status })

  return (
    <Grid container item justifyContent="center" className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleLoadMore}
      >
        <Typography variant="button" className={classes.txtBtn}>
          Load more
        </Typography>
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { display: ({ status }) => (status ? 'flex' : 'none') },
  txtBtn: {
    padding: 0,
    letterSpacing: '0.05rem',
    fontWeight: 'bold',
    color: ({ btnTextColor }) => btnTextColor ?? colors.Tolopea,
  },
  button: {
    backgroundColor: ({ btnBackground }) => btnBackground ?? colors.AliceBlue,
    boxShadow: shadows.boxShadow2,
    borderRadius: theme.spacing(2),
    width: theme.spacing(48),
    height: theme.spacing(13),
    padding: theme.spacing(2, 6.5),
    '&:hover': {
      backgroundColor: ({ backgroundBtnHov }) =>
        backgroundBtnHov ?? colors.AliceBlueSoft,
    },
  },
}))

export default LoadMoreBtn
