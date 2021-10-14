import React from 'react'
import { Grid } from '@material-ui/core'
import { Scroll, Banner, CardImage } from '@Components'
import { finedImgUrl } from '@Utils'
import LandingBanner from './LandingBanner'

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
        imageUrl={finedImgUrl(edges, 'ilus 1')}
      />
      <Scroll title="Scroll" href="home">
        <Banner
          title={'About Us'}
          description={
            'Amet enim irure qui sunt. Labore proident magna minim id dolor. Occaecat dolor officia dolor voluptate mollit labore eu voluptate. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est.'
          }
          textBtn={'Get to know us'}
          imageUrl={finedImgUrl(edges, 'ilus 3')}
        />

        <CardImage />
      </Scroll>
    </Grid>
  )
}

export default Home
