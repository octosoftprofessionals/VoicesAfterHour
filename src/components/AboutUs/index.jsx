import React from 'react'

import { TitlePage, MainGrid, Scroll, CardImage } from '@Components'
import { makeStyles } from '@material-ui/core/styles'
import GridTeamMember from './GridTeamMember'

const AboutUs = ({ data }) => {
  const {
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: { url },
          },
        },
      ],
    },
    allContentfulPerson: { edges: members },
    allContentfulAboutUs: {
      edges: [
        {
          node: {
            title,
            description: { description: aboutUsDes },
          },
        },
      ],
    },
  } = data

  const classes = useStyles()

  return (
    <MainGrid className={classes.root}>
      <TitlePage title={title} showText text={aboutUsDes} />
      <Scroll title={'Know us'} href={'ourTeam'}>
        <GridTeamMember members={members} />
      </Scroll>
      <CardImage imageUrl={url} className={classes.imgContainer} />
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(18) },
  imgContainer: {
    minHeight: '40vh',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPositionX: 'center',
    backgroundPositionY: '2vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '19vh',
    },
  },
}))

export default AboutUs
