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

import { colors } from '@Styles'
import LogoVAH from '@Assets/VAH-icon.svg'

import NavLinks from './NavLinks'
import HideOnScroll from './HideOnScroll'

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
        width: '20vmax',
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
      <AppBar position="static" className={classes.appBar}>
        <HideOnScroll {...props}>
          <Toolbar className={classes.toolbar}>
            <Grid
              container
              wrap="wrap"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Link to={'/'} className={classes.link}>
                  <LogoVAH />
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Hidden mdDown>
                  <NavLinks className={classes.links} />
                </Hidden>
              </Grid>
              <Grid item xs={2} container justify="flex-end">
                <Hidden lgUp>
                  <IconButton
                    aria-label="open drawer"
                    onClick={() => setShowDrawer(true)}
                  >
                    <Menu className={classes.iconDrawer} />
                  </IconButton>
                </Hidden>
              </Grid>
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
