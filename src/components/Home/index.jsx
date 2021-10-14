import React from 'react'
import { Grid } from '@material-ui/core'

import { graphql } from 'gatsby'

import LandingBanner from './LandingBanner'
import Scroll from '@Components/Scroll'

const Home = ({ data }) => {
  const {
    allContentfulAsset: { edges },
  } = data

  return (
    <Grid container justify="center" alignContent="center">
      <LandingBanner
        description={
          'Amet enim irure qui sunt. Labore proident magna minim id dolor. Occaecat dolor officia dolor voluptate mollit labore eu voluptate. Esse irure sint et ipsum consectetur laborum dolor velit voluptate cupidatat anim dolor.Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est.'
        }
      />
      <Scroll title="Scroll" href="home"></Scroll>
    </Grid>
  )
}

export default Home
