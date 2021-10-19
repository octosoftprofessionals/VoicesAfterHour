import React from 'react'

import { TitlePage, MainGrid, Scroll,CardImage } from '@Components'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GridTeamMember from './GridTeamMember'
import AboutUsBackground from '../../assets/Objects.png'
import {finedImgUrl} from '@Utils'

const AboutUs = ({ data }) => {
  // const {
  //   allContentfulAsset: { edges: assets },
  // } = data

  const classes = useStyles()
  const description =
    'Our team is composed ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , content here, making it look like readable English. '

  return (
    <MainGrid>
      <TitlePage title="About Us" showText text={description} />
      <Scroll title={'Know us'} href={'ourTeam'}>
        <GridTeamMember members={[]} />
      </Scroll>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="flex-end"
        className={classes.imgContainer}
      >
        <CardImage imageUrl={AboutUsBackground} />
      </Grid>
    </MainGrid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(20, 0) },
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(18) },
  imgContainer: {
    overflow:'hidden',
    height: '20rem',
  },
}))

export default AboutUs
