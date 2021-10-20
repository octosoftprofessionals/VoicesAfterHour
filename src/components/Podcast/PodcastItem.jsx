import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CardImage, Buttons } from '@Components'
import { colors, shadows } from '@Styles'

const PodcastItem = ({
  title,
  description,
  coverImage,
  youtubeUrl,
  spotifyUrl,
}) => {
  const classes = useStyles()

  return (
    <Grid container xs={10} className={classes.root}>
      <Grid item xs={3} className={classes.cardGrid}>
        <CardImage
          imageUrl={coverImage}
          minHeight={'none'}
          paddingBottom={'100%'}
          classMediaCustom={classes.classMediaCustom}
        />
      </Grid>
      <Grid item xs={9} className={classes.contentGrid}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Buttons
          btnBackground={colors.Tolopea}
          btnTextColor={colors.HotPink}
          mdWidth={8}
          className={classes.buttons}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.MidnightBlue,
    height: theme.spacing(54),
    width: theme.spacing(258),
    borderRadius: theme.spacing(3),
    boxShadow: shadows.boxShadow5,
  },
  cardGrid: { maxHeight: 'inherit', display: 'flex', alignItems: 'center' },
  contentGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },

  title: { color: colors.HotPink },
  description: {
    color: colors.White,
    fontSize: 'small',
    height: '40%',
    overflow: 'auto',
  },
  classMediaCustom: {
    width: theme.spacing(56),
    height: theme.spacing(42),
    borderRadius: '10px',
  },
}))

export default PodcastItem
