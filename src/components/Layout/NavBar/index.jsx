import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  Hidden,
  IconButton,
  Grid,
} from '@material-ui/core'

import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import NavLinks from './NavLinks'
import HideOnScroll from './HideOnScroll'
import { colors, shadows } from '../../Styles/Color'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    minHeight: theme.spacing(25),
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  boxLinks: {
    padding: theme.spacing(4),
    rowGap: theme.spacing(4),
    column: theme.spacing(4),
  },
  drawer: {
    '@global': {
      '.MuiDrawer-paperAnchorRight': {
        width: '20%',
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  iconDrawer: {
    color: colors.HotPink,
  },
}))

const NavBar = ({ ...props }) => {
  const classes = useStyles()
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <AppBar position="sticky" color="transparent" className={classes.appBar}>
        <HideOnScroll {...props}>
          <Toolbar>
            <Grid item xs={4}>
              <Link to={'/'} className={classes.link}>
                <div className={classes.logo}>{'logo'}</div>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Hidden mdDown>
                <NavLinks direction="row" justify="space-around" />
              </Hidden>
            </Grid>
            <Grid item xs={4} container justify="flex-end">
              <Hidden lgUp>
                <IconButton
                  aria-label="open drawer"
                  onClick={() => setShowDrawer(true)}
                >
                  <Menu className={classes.iconDrawer} />
                </IconButton>
              </Hidden>
            </Grid>
          </Toolbar>
        </HideOnScroll>
      </AppBar>
      <Hidden lgUp>
        <SwipeableDrawer
          className={classes.drawer}
          anchor={'right'}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
        >
          <NavLinks justify="center" className={classes.boxLinks} />
        </SwipeableDrawer>
      </Hidden>
    </>
  )
}

export default NavBar
