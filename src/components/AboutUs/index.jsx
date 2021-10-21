import React from 'react'

import { TitlePage, MainGrid, Scroll,CardImage } from '@Components'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GridTeamMember from './GridTeamMember'
import AboutUsBackground from '../../assets/Objects.png'
import {finedImgUrl} from '@Utils'

const AboutUs = ({ data }) => {
<<<<<<< HEAD
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
=======
  // const {
  //   allContentfulAsset: { edges: assets },
  // } = data
>>>>>>> 6004e2f4800bf1bfd7e3e8a36ed0d3c2351ee504

  const classes = useStyles()
  const description =
    'Our team is composed ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , content here, making it look like readable English. '

  return (
    <MainGrid>
      <TitlePage title="About Us" showText text={description} />
      <Scroll title={'Know us'} href={'ourTeam'}>
        <GridTeamMember members={members} />
      </Scroll>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="flex-end"
        className={classes.imgContainer}
      >
<<<<<<< HEAD
        <CardImage imageUrl={url} />
=======
        <CardImage imageUrl={AboutUsBackground} />
>>>>>>> 6004e2f4800bf1bfd7e3e8a36ed0d3c2351ee504
      </Grid>
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(20, 0) },
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(18) },
  imgContainer: {
<<<<<<< HEAD
    overflow: 'hidden',
    height: '40vh',
=======
    overflow:'hidden',
    height: '20rem',
>>>>>>> 6004e2f4800bf1bfd7e3e8a36ed0d3c2351ee504
  },
}))

export default AboutUs
