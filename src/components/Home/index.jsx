import React from 'react'
import { Banner, CardImage, Scroll, MainGrid } from '@Components'

import { finedImgUrl } from '@Utils'

import LandingBanner from './LandingBanner'
import Sponsors from './Sponsors'
import Podcast from './Podcast'

const Home = ({ data }) => {
  const {
    allContentfulAsset: { edges: assets },
    allContentfulSponsors: { edges: sponsors },
  } = data
  return (
    <MainGrid>
      <LandingBanner
        description={
          'Amet enim irure qui sunt. Labore proident magna minim id dolor. Occaecat dolor officia dolor voluptate mollit labore eu voluptate. Esse irure sint et ipsum consectetur laborum dolor velit voluptate cupidatat anim dolor.Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est.'
        }
        imageUrl={finedImgUrl(assets, 'ilus 1')}
      />
      <Scroll title="Scroll" href="home">
        <Banner
          title={'About Us'}
          description={
            'Amet enim irure qui sunt. Labore proident magna minim id dolor. Occaecat dolor officia dolor voluptate mollit labore eu voluptate. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est.'
          }
          textBtn={'Get to know us'}
          imageUrl={finedImgUrl(assets, 'ilus 3')}
          link={'/aboutUs'}
          right
        />

        <Podcast
          title={'Podcast'}
          description={
            'Amet enim irure qui sunt. Labore proident magna minim id dolor. Occaecat dolor officia dolor voluptate mollit labore eu voluptate. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est. Ex mollit sint veniam esse. Nisi deserunt qui tempor officia quis reprehenderit esse est.'
          }
          link={'/'}
        />

        <CardImage imageUrl={finedImgUrl(assets, 'ilus 2')} />

        <Sponsors sponsors={sponsors} />
      </Scroll>
    </MainGrid>
  )
}

export default Home
