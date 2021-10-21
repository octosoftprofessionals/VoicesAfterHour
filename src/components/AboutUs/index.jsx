import React from 'react'

import { TitlePage, MainGrid, Scroll,CardImage } from '@Components'
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
  } = data

  const classes = useStyles()
  const description =
    'Our team is composed ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , content here, making it look like readable English. '

  return (
    <MainGrid className={classes.root}>
      <TitlePage title="About Us" showText text={description} />
      <Scroll title={'Know us'} href={'ourTeam'}>
        <GridTeamMember members={members} />
      </Scroll>
      <CardImage imageUrl={url} className={classes.imgContainer} />
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { postion: 'relative' },
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(18) },
  imgContainer: {
    minHeight: '40vh',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPositionX: 'center',
    backgroundPositionY: '2vh',
    [theme.breakpoints.down('md')]:{
      minHeight: '19vh'
    }
  },
}))

export default AboutUs
