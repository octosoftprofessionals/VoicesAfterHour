import React from 'react'

import { Grid, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Buttons } from '@Components'
import { colors, shadows, borders, weight } from '@Styles'

const PodcastItem = ({ node }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="space-between"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item xs={10} md={2} className={classes.boxImage}>
        <CardMedia className={classes.media} image={node.coverImage.file.url} />
      </Grid>
      <Grid item xs={12} sm={10} className={classes.boxInfo}>
        <Typography variant="h6" className={classes.textTitle}>
          {node.title}
        </Typography>
        <Grid item xs={11}>
          <Typography className={classes.textDescription}>
            {node.description.description}
          </Typography>
        </Grid>
        <Buttons
          btnBackground={colors.Tolopea}
          btnTextColor={colors.HotPink}
          className={classes.buttons}
          spotifyLink={node.spotifyUrl}
          justify="space-between"
          justifyBtn="flex-start"
          xs={12}
          md={8}
          lg={6}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.MidnightBlue,
    borderRadius: theme.spacing(3),
    boxShadow: shadows.boxShadow5,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },

  boxImage: {
    width: theme.spacing(56),
    height: theme.spacing(42),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(56),
      height: theme.spacing(42),
    },
    borderRadius: 10,
    border: borders.border1,
    overflow: 'hidden',
    margin: theme.spacing(6),
  },
  media: {
    height: '100%',
    width: '100%',
  },

  boxInfo: { padding: theme.spacing(6, 0) },
  textTitle: {
    color: colors.HotPink,
    fontWeight: weight.xl,
    letterSpacing: '0.05rem',
  },
  textDescription: {
    color: colors.White,
    overflow: 'auto',
    fontSize: '0.75rem',
  },

  buttons: {
    position: 'absolute',
    bottom: 24,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      bottom: 0,
    },
  },
}))

export default PodcastItem
