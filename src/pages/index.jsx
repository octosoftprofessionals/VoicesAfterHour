import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '@Layout'
import Home from '@Components/Home'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}

export default RootIndex
