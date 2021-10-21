import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { MainGrid } from '@Components'
import { colors } from '@Styles'

import PodcastItems from './PodcastItems'
import PodcastMonthly from './PodcastMonthly'

const PodcastContainer = ({ podcasts }) => {
  const podcastsPerYear = []
  const yearsList = []
  podcasts.map(({ node }) => {
    let date = new Date(node.creationDate)
    const year = date.getFullYear()

    if (!yearsList.includes(year)) {
      yearsList.push(year)
    }
  })
  yearsList.sort()
  const sortYearsList = yearsList.reverse()

  for (let i = 0; i < sortYearsList.length; i++) {
    let oneYearPodcasts = podcasts.filter((obj) => {
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
      january: { month: 'january', podcasts: [] },
      february: { month: 'february', podcasts: [] },
      march: { month: 'march', podcasts: [] },
      april: { month: 'april', podcasts: [] },
      may: { month: 'may', podcasts: [] },
      june: { month: 'june', podcasts: [] },
      july: { month: 'july', podcasts: [] },
      august: { month: 'august', podcasts: [] },
      september: { month: 'september', podcasts: [] },
      october: { month: 'october', podcasts: [] },
      november: { month: 'november', podcasts: [] },
      december: { month: 'december', podcasts: [] },
    }
    podcastsPerYear[i].map((obj) => {
      let date = new Date(obj.node.creationDate)
      const month = date.getMonth()

      switch (month) {
        case 0:
          months.january.podcasts.push(obj)
          break

        case 1:
          months.february.podcasts.push(obj)
          break

        case 2:
          months.march.podcasts.push(obj)
          break

        case 3:
          months.april.podcasts.push(obj)
          break

        case 4:
          months.may.podcasts.push(obj)
          break

        case 5:
          months.june.podcasts.push(obj)
          break

        case 6:
          months.july.podcasts.push(obj)
          break

        case 7:
          months.august.podcasts.push(obj)
          break

        case 8:
          months.september.podcasts.push(obj)
          break

        case 9:
          months.october.podcasts.push(obj)
          break

        case 10:
          months.november.podcasts.push(obj)
          break

        case 11:
          months.december.podcasts.push(obj)
          break

        default:
          break
      }
    })
    let year = yearsList[i]
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
      months.december,
      { year }
    )

    podcastsPerYear[i].reverse()
  }

  const classes = useStyles()
  return (
    <MainGrid container>
      {podcastsPerYear.map((anualPodcast) => (
        <PodcastMonthly
          anualPodcast={anualPodcast}
          key={`${anualPodcast[0].year}`}
        />
      ))}

      <Grid>
        <Grid
          container
          xs={12}
          sm={12}
          justify={'center'}
          className={classes.root}
        >
          {podcasts.map(({ node }) => (
            <PodcastItems
              title={node.title}
              description={node.description.description}
              coverImage={node.coverImage.file.url}
              youtubeUrl={node.youtubeUrl}
              spotifyUrl={node.spotifyUrl}
            />
          ))}
        </Grid>
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

export default PodcastContainer
