import React from 'react'

import './variables.css'
import './global.css'
class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <main>{children}</main>
      </>
    )
  }
}

export default Layout
