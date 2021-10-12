import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors, shadows } from '@Styles/Color'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontWeight: 400,
    color: colors.HotPink,
  },
  selector: {
    fontWeight: 700,
    '& p::after': {
      content: '""',
      width: '100%',
      height: 4,
      backgroundColor: colors.Razzmatazz,
      display: 'block',
      borderRadius: 2,
      boxShadow: `${shadows.boxShadow1}, ${shadows.boxShadow2}`,
    },
  },
}))
const NavLinkItem = ({ link, title, selector, ...props }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} lg={3} {...props}>
      <Link
        className={classes.link}
        to={link}
        activeClassName={classes.selector}
      >
        <Typography variant="body1" className={classes.linkText}>
          {title}
        </Typography>
      </Link>
    </Grid>
  )
}

export default NavLinkItem
