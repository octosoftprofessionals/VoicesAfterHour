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
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkButton: {
    padding: 6,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Montserrat',
    textShadow: ({ transparent }) => (!!transparent ? '0 0 4px #FFF' : 'none'),
  },
  button: {
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

      <Link
        className={classes.linkButton}
        to="https://calendly.com/octosoftprofessionals/no-strings-consultation?month=2021-03"
      >
        <Button className={classes.button}>
          <Typography variant="body1" className={classes.linkText}>
            {'BOOK A ZOOM CALL'}
          </Typography>
        </Button>
      </Link>
    </>
  )
}

export default NavLinks
