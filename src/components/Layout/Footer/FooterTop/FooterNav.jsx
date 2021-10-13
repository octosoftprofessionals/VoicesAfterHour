import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Facebook, Instagram, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: '2rem', fill: theme.palette.common.white },
  link: {
    textDecoration: 'none',
    display: 'flex',
    minHeight: '2rem',
    alignItems: 'center',
  },
  box: { columnGap: theme.spacing(4) },
  containerLink: { rowGap: theme.spacing(4) },
}))

const FooterNav = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={5} container justify="center" alignContent="center">
      <Grid
        item
        xs={6}
        container
        justify="center"
        direction="column"
        alignContent="center"
        wrap="wrap"
        className={classes.containerLink}
      >
        <Link to={'/aboutUs'} className={classes.link}>
          <Typography variant="body1" color="primary">
            About Us
          </Typography>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Typography variant="body1" color="primary">
            Contact
          </Typography>
        </Link>
        <Link to={'/'} className={classes.link}>
          <Typography variant="body1" color="primary">
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
            <Typography variant="body1" color="primary">
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
            <Typography variant="body1" color="primary">
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
            <Typography variant="body1" color="primary">
              Twitter
            </Typography>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  )
}

export default FooterNav
