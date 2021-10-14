import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, shadows, weight } from '@Styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: ({ right }) => (right ? 'row-reverse' : 'row'),
    padding: theme.spacing(2),
  },
  box: { rowGap: theme.spacing(2.25) },
  image: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '30vh',
  },
  button: {
    backgroundColor: ({ backgroundBtn }) => backgroundBtn ?? colors.AliceBlue,
    boxShadow: shadows.boxShadow2,
    borderRadius: theme.spacing(2),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    textDecoration: 'underline',
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
  description: {
    letterSpacing: '0.05rem',
    color: colors.LightCyan,
    paddingBottom: theme.spacing(2.5),
  },
  txtBtn: {
    padding: theme.spacing(2.5),
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: colors.Tolopea,
  },
}))

const Banner = ({
  title,
  description,
  textBtn,
  backgroundBtn,
  imageUrl,
  right,
}) => {
  const classes = useStyles({ imageUrl, right, backgroundBtn })
  return (
    <Grid
      item
      container
      justify="space-around"
      alignContent="center"
      wrap="wrap"
      className={classes.root}
    >
      <Grid
        item
        xs={11}
        md={4}
        container
        direction="column"
        alignItems="flex-start"
        className={classes.box}
      >
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>

        <Typography className={classes.description} variant="subtitle1">
          {description}
        </Typography>

        <Button className={classes.button} variant="contained">
          <Typography
            variant="button"
            color="textPrimary"
            className={classes.txtBtn}
          >
            {textBtn}
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} md={5} className={classes.image} />
    </Grid>
  )
}

export default Banner
