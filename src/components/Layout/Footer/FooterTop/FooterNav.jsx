import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Facebook, Instagram, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: { fontSize: '2rem', fill: theme.palette.common.white },
  link: {
    textDecoration: 'none',
    display: 'flex',
    minHeight: '2rem',
    alignItems: 'center',
  },
  box: { columnGap: theme.spacing(4) },
  containerLink: { rowGap: theme.spacing(4) },
  linkText: {},
}))

const FooterNav = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={4} container justify="center" alignContent="center">
      <Grid
        item
        xs={6}
        container
        justify="center"
        direction="column"
        alignContent="center"
        className={classes.containerLink}
      >
        <Link to={'/aboutUs'} className={classes.link}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.linkText}
          >
            About Us
          </Typography>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.linkText}
          >
            Contact
          </Typography>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Typography
            variant="body1"
            color="primary"
            className={classes.linkText}
          >
            Terms & Conditions
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        container
        justify="center"
        alignContent="center"
        direction="column"
        className={classes.containerLink}
      >
        <Link to={'/'} className={classes.link}>
          <Grid
            item
            container
            alignItems="center"
            wrap="wrap"
            className={classes.box}
          >
            <Facebook className={classes.icon} />
            <Typography
              variant="body1"
              color="primary"
              className={classes.linkText}
            >
              Facebook
            </Typography>
          </Grid>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Grid
            item
            container
            alignItems="center"
            wrap="wrap"
            className={classes.box}
          >
            <Instagram className={classes.icon} />
            <Typography
              variant="body1"
              color="primary"
              className={classes.linkText}
            >
              Instagram
            </Typography>
          </Grid>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Grid
            item
            container
            alignItems="center"
            wrap="wrap"
            className={classes.box}
          >
            <Twitter className={classes.icon} />
            <Typography
              variant="body1"
              color="primary"
              className={classes.linkText}
            >
              Twitter
            </Typography>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  )
}

export default FooterNav
