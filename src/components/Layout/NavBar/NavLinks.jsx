import React, { useState } from 'react'

import { Link } from 'gatsby'
import { Hidden, Button, Menu, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  },
  link: {
    padding: 15,
    textDecoration: 'none',
  },
  linkButton: {
    textDecoration: 'none',
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.palette.secondary.contrastText,
    textShadow: ({ transparent }) => (!!transparent ? '0 0 4px #FFF' : 'none'),
  },
  button: {
    margin: 6,
    backgroundColor: '#33adff',
  },
}))

const NavLinks = (props) => {
  const classes = useStyles(props)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Link className={classes.link} to="/">
        <Typography variant="body1" className={classes.linkText}>
          {'HOME'}
        </Typography>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} to="/aboutUs">
        <Typography variant="body1" className={classes.linkText}>
          {'ABOUT US'}
        </Typography>
      </Link>

      <Hidden mdDown>|</Hidden>
      <a
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.link}
      >
        <Typography variant="body1" className={classes.linkText}>
          {'PROGRAMING'}
        </Typography>
      </a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={Link}
          to="/Programing/podcast"
          onClick={handleClose}
        >
          {'PODCAST'}
        </MenuItem>
        <MenuItem component={Link} to="/Programing/radio" onClick={handleClose}>
          {'RADIO'}
        </MenuItem>
        <MenuItem component={Link} to="/Programing/shows" onClick={handleClose}>
          {'SHOWS'}
        </MenuItem>
        <MenuItem
          component={Link}
          to="/Programing/sponsors"
          onClick={handleClose}
        >
          {'SPONSORS'}
        </MenuItem>
      </Menu>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} to="/contactUs">
        <Typography variant="body1" className={classes.linkText}>
          {'CONTACT US'}
        </Typography>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Button className={classes.button}>
        <Link className={classes.linkButton} to="/">
          <Typography variant="body1" className={classes.linkText}>
            DONATION
          </Typography>
        </Link>
      </Button>
    </>
  )
}

export default NavLinks
