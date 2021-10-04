import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  useScrollTrigger,
  Slide,
  Hidden,
  IconButton,
  Box,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import NavLinks from './NavLinks'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    background: ({ transparent }) => (!!transparent ? 'transparent' : '#fff'),
    transition: '0.2s',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  logo: {
    width: 46,
    height: 46,
    marginRight: 10,
    opacity: ({ transparent }) => (!!transparent ? '0' : '1'),
  },
  appBar: {
    background: 'none',
    boxShadow: ({ transparent }) => (!!transparent ? 'none' : '0 0 4px gray'),
  },
  iconDrawer: {
    color: theme.palette.secondary.contrastText,
    textShadow: ({ transparent }) => (!!transparent ? '0 0 6px black' : 'none'),
  },
  button: {
    backgroundColor: '#33adff',
  },
}))

const HideOnScroll = (props) => {
  const { children } = props
  const trigger = useScrollTrigger({})
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const NavBar = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  })
  const transparent = !trigger && props.home

  const classes = useStyles({ transparent })
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link to={'/'} className={classes.link}>
                <div className={classes.logo}>{'logo'}</div>
            </Link>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setShowDrawer(true)}
                edge="start"
                className={classes.iconDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              <Box className={classes.links}>
                <NavLinks transparent={transparent} />
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden lgUp>
        <SwipeableDrawer
          anchor={'right'}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
        >
          <NavLinks color="black" textShadow="none" />
        </SwipeableDrawer>
      </Hidden>
    </>
  )
}

export default NavBar
