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
import BehanceIcon from '@Assets/behance.svg'

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
  boxIcons: { rowGap: theme.spacing(2), columnGap: theme.spacing(2) },
  iconBehance: {
    width: '1.5rem',
    height: '1.5rem',
    fill: '#1d2178',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
  },
}))

const SocialIcons = ({ socialMedia }) => {
  const classes = useStyles()

  const [
    {
      Behance: behance,
      Facebook: facebook,
      GitHub: gitHub,
      Instagram: instagram,
      Twitter: twitter,
      Youtube: youtube,
    },
  ] = socialMedia

  return (
    <Grid
      item
      xs={9}
      sm={2}
      container
      justify="space-around"
      wrap="wrap"
      className={classes.boxIcons}
    >
      {facebook && (
        <ItemSocial link={facebook}>
          <Facebook className={classes.icon} />
        </ItemSocial>
      )}
      {youtube && (
        <ItemSocial link={youtube}>
          <YouTube className={classes.icon} />
        </ItemSocial>
      )}
      {instagram && (
        <ItemSocial link={instagram}>
          <Instagram className={classes.icon} />
        </ItemSocial>
      )}
      {twitter && (
        <ItemSocial link={twitter}>
          <Twitter className={classes.icon} />
        </ItemSocial>
      )}
      {behance && (
        <ItemSocial link={behance}>
          <BehanceIcon className={classes.iconBehance} />
        </ItemSocial>
      )}
      {gitHub && (
        <ItemSocial link={gitHub}>
          <GitHub className={classes.icon} />
        </ItemSocial>
      )}
    </Grid>
  )
}

export default SocialIcons
