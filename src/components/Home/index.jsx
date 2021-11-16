import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Banner, CardImage, Scroll, MainGrid } from '@Components'
import { finedImgUrl } from '@Utils'

import LandingBanner from './LandingBanner'
import Sponsors from './Sponsors'
import Podcast from './Podcast'

const Home = ({ data }) => {
  const {
    allContentfulAsset: { edges: assets },
    allContentfulSponsors: { edges: sponsors },
    allContentfulHome: {
      edges: [
        {
          node: {
            linkLearnMore,
            channelSpotify: linkSpotify,
            channelYoutube: linkYoutube,
            aboutUs: { aboutUs: aboutUsDes },
            landingText: { landingText: landingDes },
            podcastDescription: { podcastDescription: podcastDes },
          },
        },
      ],
    },
  } = data
  const classes = useStyles()
  return (
    <MainGrid>
      <LandingBanner
        description={`${landingDes}`}
        imageUrl={finedImgUrl(assets, 'ilus 1')}
      />
      <Scroll title="Scroll" href="home">
        <Banner
          title={'About Us'}
          description={`${aboutUsDes}`}
          textBtn={'Get to know us'}
          imageUrl={finedImgUrl(assets, 'ilus 3')}
          link={'/aboutUs'}
          right
        />

        <Podcast
          title={'Podcast'}
          description={`${podcastDes}`}
          link={linkLearnMore}
          spotifyLink={linkSpotify ?? '/podcast'}
          youtubeLink={linkYoutube ?? '/'}
        />

        <CardImage
          imageUrl={finedImgUrl(assets, 'ilus 2')}
          className={classes.imgContainer}
        />

        <Sponsors sponsors={sponsors} />
      </Scroll>
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: '100%',
    minHeight: '25vw',
    [theme.breakpoints.down('xs')]: {
      minHeight: '40vw',
    },
    backgroundSize: 'contain',
  },
}))

export default Home
