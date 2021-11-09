import React from 'react'
import { Link } from 'gatsby'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, shadows, weight } from '@Styles'

const Banner = ({
  title,
  description,
  textBtn,
  backgroundBtn,
  backgroundBtnHov,
  imageUrl,
  right,
  link,
}) => {
  const classes = useStyles({
    imageUrl,
    right,
    backgroundBtn,
    backgroundBtnHov,
  })
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

        <Link to={link} className={classes.link}>
          <Button className={classes.button} variant="contained">
            <Typography
              variant="button"
              color="textPrimary"
              className={classes.txtBtn}
            >
              {textBtn}
            </Typography>
          </Button>
        </Link>
      </Grid>

      <Grid item xs={12} md={5} className={classes.image} />
    </Grid>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: ({ right }) => (right ? 'row-reverse' : 'row'),
    paddingBottom: theme.spacing(20),
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
    padding: theme.spacing(3.25, 6.5),
    '&:hover': {
      backgroundColor: ({ backgroundBtnHov }) =>
        backgroundBtnHov ?? colors.AliceBlueSoft,
    },
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
    padding: 0,
    letterSpacing: '0.05rem',
    fontWeight: weight.l,
    color: colors.Tolopea,
  },
  link: {
    textDecoration: 'none',
  },
}))

export default Banner
