import React from 'react'
import { TitlePage, MainGrid } from '@Components'
import PodcastItem from './PodcastItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@Styles'

const Podcast = ({ data }) => {
  const {
    allContentfulPodcastPost: { edges: podcasts },
  } = data
  console.log('data :>> ', podcasts)

  const podcastDumy = [
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-11-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-12-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-09-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-08-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-11-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-12-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-09-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-08-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2022-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-11-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-12-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-09-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-08-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
    {
      node: { creationDate: '2020-10-04T00:00-03:00' },
    },
  ]

  const resDumy = [
    [
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
    ],
    [
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
    ],
    [
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
      [
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
        {
          node: { creationDate: '2021-10-04T00:00-03:00' },
        },
      ],
    ],
  ]

  const podcastsPerYear = []

  const yearsList = []
  podcastDumy.map(({ node }) => {
    let date = new Date(node.creationDate)
    const year = date.getFullYear()
    console.log('year :>> ', year)
    // var options = { month: 'long' }
    // const month = new Intl.DateTimeFormat('en-US', options).format(date)
    // console.log('mes largo :>>', month)

    if (!yearsList.includes(year)) {
      yearsList.push(year)
    }
  })

  for (let i = 0; i < yearsList.length; i++) {
    let oneYearPodcasts = podcastDumy.filter((obj) => {
      let date = new Date(obj.node.creationDate)
      const year = date.getFullYear()

      if (year === yearsList[i]) {
        return true
      } else {
        return false
      }
    })

    console.log('oneYearPodcasts :>> ', oneYearPodcasts)
    podcastsPerYear.push(oneYearPodcasts)
  }

  console.log('podcastsPerYear :>> ', podcastsPerYear)

  const classes = useStyles()
  return (
    <MainGrid>
      <TitlePage title="Podcast" showText />
      <Grid
        container
        xs={12}
        sm={12}
        justify={'center'}
        className={classes.root}
      >
        {podcasts.map(({ node }) => (
          <PodcastItem
            title={node.title}
            description={node.description.description}
            coverImage={node.coverImage.file.url}
            youtubeUrl={node.youtubeUrl}
            spotifyUrl={node.spotifyUrl}
          />
        ))}
      </Grid>
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(6),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
}))

export default Podcast
