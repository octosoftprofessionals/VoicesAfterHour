import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import '../Styles/variables.css'
import '../Styles/global.css'

import Footer from './Footer'
import NavBar from './NavBar'
import Theme from '../Styles'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavBar />
        <main>
          {children}
          <footer>
            <Footer />
          </footer>
        </main>
      </ThemeProvider>
    )
  }
}

export default Layout
