import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import {
  Facebook,
  GitHub,
  Instagram,
  Twitter,
  YouTube,
} from '@material-ui/icons'
import BehanceIcon from '../../../../assets/behance.svg'

import ItemSocial from './ItemSocial'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(8),
    minWidth: theme.spacing(25),
  },
  link: {
    textDecoration: 'none',
  },
  bottomBar: {
    background: '#1d2178',
    color: theme.palette.common.white,
    padding: theme.spacing(4, 8),
  },
  bottomText: {
    color: theme.palette.common.white,
    '@media (max-width: 576px)': { textAlign: 'center' },
  },
  iconBehance: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    fill: '#1d2178',
  },
  icon: {
    width: '2rem',
    height: '2rem',
  },
}))

const SocialIcons = () => {
  const classes = useStyles()

  return (
    <Grid item xs={9} sm={3} container justify="space-around">
      <ItemSocial link={'https://www.facebook.com/octosoftprofessionals'}>
        <Facebook className={classes.icon} />
      </ItemSocial>

      <ItemSocial>
        <YouTube className={classes.icon} />
      </ItemSocial>

      <ItemSocial link="https://www.instagram.com/octosoftprofessionals/">
        <Instagram className={classes.icon} />
      </ItemSocial>

      <ItemSocial link="https://twitter.com/octosoftprofessionals">
        <Twitter className={classes.icon} />
      </ItemSocial>

      <ItemSocial link="https://www.behance.net/Octosoft">
        <BehanceIcon className={classes.iconBehance} />
      </ItemSocial>

      <ItemSocial link="https://github.com/octosoftprofessionals">
        <GitHub className={classes.icon} />
      </ItemSocial>
    </Grid>
  )
}

export default SocialIcons
