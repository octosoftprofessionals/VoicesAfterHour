import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'
import { Buttons } from '@Components'

const Podcast = ({
  title,
  description,
  link,
  spotifyUrl,
  spotifyLink,
  youtubeLink,
}) => {
  const classes = useStyles()

  return (
    <Grid item container justifyContent="center" className={classes.root}>
      <Grid item xs={10} md={8} container justifyContent="center">
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description} variant="h6">
          {`${description} `}
          <Link to={link} className={classes.link}>
            {'Learn more.'}
          </Link>
        </Typography>
      </Grid>
      <Buttons
        spotifyLink={spotifyUrl}
        xs={12}
        lg={5}
        linkHome={spotifyLink}
        youtubeLink={youtubeLink}
      />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(20) },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    textDecoration: 'underline',
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
    paddingBottom: theme.spacing(2),
  },
  description: {
    letterSpacing: '0.05rem',
    color: colors.LightCyan,
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
  },
  link: {
    color: 'inherit',
  },
}))

export default Podcast
