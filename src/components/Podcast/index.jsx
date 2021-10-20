import React from 'react'
import { TitlePage, MainGrid } from '@Components'
import PodcastItem from './PodcastItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@Styles'
import { sortBy } from 'lodash'

const Podcast = ({ data }) => {
  const {
    allContentfulPodcastPost: { edges: podcasts },
  } = data

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
      node: { creationDate: '2021-10-05T00:00-03:00' },
    },
    {
      node: { creationDate: '2021-10-05T00:00-03:00' },
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

  const podcastsPerYear = []

  const yearsList = []
  podcastDumy.map(({ node }) => {
    let date = new Date(node.creationDate)
    const year = date.getFullYear()

    if (!yearsList.includes(year)) {
      yearsList.push(year)
    }
  })

  const sortYearsList = yearsList.sort()

  for (let i = 0; i < sortYearsList.length; i++) {
    let oneYearPodcasts = podcastDumy.filter((obj) => {
      let date = new Date(obj.node.creationDate)
      const year = date.getFullYear()

      if (year === sortYearsList[i]) {
        return true
      } else {
        return false
      }
    })

    podcastsPerYear.push(oneYearPodcasts)
  }

  for (let i = 0; i < podcastsPerYear.length; i++) {
    const months = {
      january: [],
      february: [],
      march: [],
      april: [],
      may: [],
      june: [],
      july: [],
      august: [],
      september: [],
      october: [],
      november: [],
      december: [],
    }
    podcastsPerYear[i].map((obj) => {
      let date = new Date(obj.node.creationDate)
      const month = date.getMonth()

      switch (month) {
        case 0:
          months.january.push(obj)
          break

        case 1:
          months.february.push(obj)
          break

        case 2:
          months.march.push(obj)
          break

        case 3:
          months.april.push(obj)
          break

        case 4:
          months.may.push(obj)
          break

        case 5:
          months.june.push(obj)
          break

        case 6:
          months.july.push(obj)
          break

        case 7:
          months.august.push(obj)
          break

        case 8:
          months.september.push(obj)
          break

        case 9:
          months.october.push(obj)
          break

        case 10:
          months.november.push(obj)
          break

        case 11:
          months.december.push(obj)
          break

        default:
          break
      }
    })

    podcastsPerYear[i] = []
    podcastsPerYear[i].push(
      months.january,
      months.february,
      months.march,
      months.april,
      months.may,
      months.june,
      months.july,
      months.august,
      months.september,
      months.october,
      months.november,
      months.december
    )
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
