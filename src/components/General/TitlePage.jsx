import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@Styles'

const TitlePage = ({ title, showText = false, text }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justifyContent="center"
      alignContent="center"
      className={classes.root}
    >
      <Grid item xs={10}>
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
      </Grid>
      {showText && (
        <Grid container justifyContent="center" alignContent="center">
          <Grid item xs={12} md={7}>
            <Typography className={classes.description} variant="subtitle1">
              {text}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(4),
    padding: theme.spacing(8),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    textAlign: 'center',
    letterSpacing: '0.02rem',
  },
  description: {
    letterSpacing: '0.05rem',
    color: colors.LightCyan,
    textAlign: 'center',
    paddingBottom: theme.spacing(2.5),
    lineHeight: '36px',
  },
}))

export default TitlePage
