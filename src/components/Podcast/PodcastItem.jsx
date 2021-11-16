import React from 'react'

import { Grid, Typography, CardMedia, withWidth } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Buttons } from '@Components'
import { colors, shadows, borders, weight } from '@Styles'

const PodcastItem = ({ node, ...props }) => {
  const classes = useStyles()
  const { width } = props

  return (
    <Grid item xs={12} container className={classes.root}>
      <Grid item xs={11} sm={2} className={classes.boxImage}>
        <CardMedia className={classes.media} image={node.coverImage.file.url} />
      </Grid>
      <Grid
        item
        xs={11}
        sm={9}
        container
        direction="column"
        justifyContent="space-between"
        className={classes.boxInfo}
      >
        <Typography variant="h6" className={classes.textTitle}>
          {node.title}
        </Typography>

        <Typography className={classes.textDescription}>
          {node.description.description}
        </Typography>

        <Grid container alignItems="center" className={classes.boxButtons}>
          <Buttons
            btnBackground={colors.Tolopea}
            btnBackgroundHov={colors.CherryPie}
            btnTextColor={colors.HotPink}
            spotifyLink={node.spotifyUrl}
            youtubeLink={node.youtubeUrl}
            className={classes.buttons}
            justifyContent="space-between"
            justifyBtn={width === 'xs' ? 'center' : 'flex-start'}
            xs={12}
            md={10}
            smSpotifyBtn={9}
            smYoutubeBtn={3}
            xsSpotifyBtn={9}
            textBtn={['VIEW', 'LISTEN']}
          />
        </Grid>
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
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  boxImage: {
    borderRadius: 10,
    border: borders.border1,
    overflow: 'hidden',
    minWidth: theme.spacing(56),
    minHeight: theme.spacing(42),
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
  boxButtons: {
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
  },
}))

export default withWidth()(PodcastItem)
