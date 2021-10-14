import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SponsorsItem from './SponsorsItem'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  boxSponsorItems: {
    // rowGap: theme.spacing(2),
    // columnGap: theme.spacing(2),
  },
}))

const sponsorsArr = [
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
  {
    sponsorName: 'lorem ipsum',
    sponsorImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfluencermarketing.ai%2Fwp-content%2Fuploads%2F2020%2F05%2FPodcast-blog-6.jpg&f=1&nofb=1',
  },
]

const Sponsors = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Typography variant="h2" className={classes.root}>
        SPONSORS
      </Typography>
      <Grid container justify="center" className={classes.boxSponsorItems}>
        {sponsorsArr.map(({ sponsorName, sponsorImage }, index) => (
          <SponsorsItem
            key={index}
            sponsorName={sponsorName}
            imageUrl={sponsorImage}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default Sponsors
