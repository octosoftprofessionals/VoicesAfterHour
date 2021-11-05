import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  iconSocial: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: theme.palette.common.white,
    color: '#1d2178',
    '& svg': {
      transition: '0.2s',
    },
    '&:hover svg': {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  link: {
    textDecoration: 'none',
  },
}))

const ItemSocial = ({ children, link }) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={link}>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className={classes.iconSocial}
      >
        {children}
      </Grid>
    </Link>
  )
}

export default ItemSocial
