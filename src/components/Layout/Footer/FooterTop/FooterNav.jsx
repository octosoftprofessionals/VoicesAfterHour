import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Instagram, Twitter, Facebook } from '@material-ui/icons'

// import Facebook from '@Assets/facebook.svg'

const FooterNav = ({ socialMedia }) => {
  const classes = useStyles()
  const [{ Facebook: facebook, Instagram: instagram, Twitter: twitter }] =
    socialMedia

  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={3}
      container
      justify="center"
      alignContent="center"
    >
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
        <Link to={'/contactUs'} className={classes.link}>
          <Typography variant="body1" color="primary">
            Contact Us
          </Typography>
        </Link>
        <Link to={'/termsConditions'} className={classes.link}>
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
        <Link to={facebook ?? '/'} className={classes.link}>
          <Grid
            item
            container
            justify="center"
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
        <Link to={twitter ?? '/'} className={classes.link}>
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
        <Link to={instagram ?? '/'} className={classes.link}>
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
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: '1.5rem', fill: theme.palette.common.white },
  link: {
    textDecoration: 'none',
    display: 'flex',
    minHeight: '1rem',
    alignItems: 'center',
  },
  box: { columnGap: theme.spacing(4) },
  boxIconFacebook: { width: '1rem', height: '1rem' },
  containerLink: {
    rowGap: theme.spacing(4),
    '@global': {
      '.MuiTypography-body1': {
        fontSize: '0.9rem',
        letterSpacing: '0.05rem',
      },
    },
  },
}))

export default FooterNav
