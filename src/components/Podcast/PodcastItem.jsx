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
      xs={12}
      container
      justify="space-evenly"
      className={classes.root}
    >
      <Grid item xs={10} sm={2} container alignItems="center">
        <div className={classes.boxImage}>
          <CardMedia
            className={classes.media}
            image={node.coverImage.file.url}
          />
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={9}
        container
        direction="column"
        justify="space-between"
        className={classes.boxInfo}
      >
        <Typography variant="h6" className={classes.textTitle}>
          {node.title}
        </Typography>

        <Typography className={classes.textDescription}>
          {node.description.description}
        </Typography>

        <Buttons
          btnBackground={colors.Tolopea}
          btnTextColor={colors.HotPink}
          className={classes.buttons}
          spotifyLink={node.spotifyUrl}
          justify="space-between"
          justifyBtn="flex-start"
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    minHeight: theme.spacing(54),
    backgroundColor: colors.MidnightBlue,
    borderRadius: theme.spacing(3),
    boxShadow: shadows.boxShadow5,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },

  boxImage: {
    width: theme.spacing(56),
    height: theme.spacing(42),
    borderRadius: 10,
    border: borders.border1,
    overflow: 'hidden',
  },
  media: {
    height: '100%',
    width: '100%',
  },

  boxInfo: { alignItems: 'stretch' },
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

  buttons: { width: '70%' },
}))

export default PodcastItem
