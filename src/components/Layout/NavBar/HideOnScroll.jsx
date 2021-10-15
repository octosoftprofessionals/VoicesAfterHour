import React from 'react'

import { Slide } from '@material-ui/core'

const HideOnScroll = ({ children, trigger }) => {
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
