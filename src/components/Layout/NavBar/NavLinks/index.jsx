import React, { useState } from 'react'

import { Grid } from '@material-ui/core'

import NavLinkItem from './NavLinkItem'

const listLink = [
  { link: '/', title: 'Home' },
  { link: '/aboutUs', title: 'About us' },
  { link: '/podcast', title: 'Podcast' },
  { link: '/contactUs', title: 'Contact us' },
]

const NavLinks = ({ ...props }) => {
  const [selector, setSelector] = useState('Home')
  const handleSelect = (searched) => {
    setSelector(searched)
  }

  return (
    <Grid container wrap="wrap" alignItems="center" {...props}>
      {listLink.map(({ link, title }) => (
        <NavLinkItem
          link={link}
          title={title}
          key={title}
          selector={selector}
          onClick={() => handleSelect(title)}
        />
      ))}
    </Grid>
  )
}

export default NavLinks
