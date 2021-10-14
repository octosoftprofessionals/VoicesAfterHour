import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import Footer from './Footer'
import NavBar from './NavBar'
import {theme} from '@Styles'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Layout
