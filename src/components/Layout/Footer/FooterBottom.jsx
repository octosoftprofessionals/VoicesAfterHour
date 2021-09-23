import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import BehanceIcon from '../../../assets/behance.svg'

const useStyles = makeStyles((theme) => ({
  section: {
    flex: 1,
    margin: theme.spacing(8),
    minWidth: theme.spacing(25),
  },
  link: {
    textDecoration: 'none',
  },
  bottomBar: {
    background: '#1d2178',
    color: '#fff',
    padding: theme.spacing(4, 8),
  },
  bottomText: {
    fontSize: 13,
    color: '#fff',
    '@media (max-width: 576px)': { textAlign: 'center' },
  },
  iconSocial: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: 'white',
    color: '#1d2178',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      transition: '0.2s',
    },
    '&:hover svg': {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  iconBehance: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    fill: '#1d2178',
  },
  icon: {
    width: '2em',
    height: '2em',
  },
}))

const ItemSocial = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      justify="center"
      alignContent="center"
      className={classes.iconSocial}
    >
      {children}
    </Grid>
  )
}
const FooterBottom = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.bottomBar}
    >
      <Grid
        item
        xs={12}
        sm={3}
        container
        justify="center"
        className={classes.section}
      >
        <Typography className={classes.bottomText}>
          Reprehenderit cillum minim exercitation commodo nisi dolor in aliqua
          adipisicing.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} container justify="center">
        <Typography className={classes.bottomText}>
          Email: info@octosoftprofessionals.com
        </Typography>
      </Grid>
      <Grid item xs={9} sm={3} container justify="space-around">
        <Link
          className={classes.link}
          to="https://www.facebook.com/octosoftprofessionals"
        >
          <ItemSocial>
            <FacebookIcon className={classes.icon} />
          </ItemSocial>
        </Link>
        <Link className={classes.link} to="/">
          <ItemSocial>
            <YouTubeIcon className={classes.icon} />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://www.instagram.com/octosoftprofessionals/"
        >
          <ItemSocial>
            <InstagramIcon className={classes.icon} />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://twitter.com/octosoftprofessionals"
        >
          <ItemSocial>
            <TwitterIcon className={classes.icon} />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://www.behance.net/Octosoftprofessional"
        >
          <ItemSocial>
            <BehanceIcon className={classes.iconBehance} />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://github.com/octosoftprofessionals"
        >
          <ItemSocial>
            <GitHubIcon className={classes.icon} />
          </ItemSocial>
        </Link>
      </Grid>
    </Grid>
  )
}

export default FooterBottom
