import React from 'react'

import Typography from '@material-ui/core/Typography'
import { Avatar, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, weight } from '@Styles'

const TeamMemberItem = ({ imageUrl, fullname, title, description }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} className={classes.root}>
      <Paper elevation={0} className={classes.card}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          className={classes.box}
        >
          <div className={classes.boxAvatar}>
            <Avatar src={imageUrl} className={classes.avatar} />
          </div>

          <Typography variant="h6" className={classes.name}>
            {fullname}
          </Typography>
          <Typography variant="button" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(75),
    minHeight: theme.spacing(108.5),
  },
  card: {
    backgroundColor: colors.MidnightBlue,
    padding: theme.spacing(5, 9),
    borderRadius: theme.spacing(2.5),
  },
  box: { rowGap: theme.spacing(2) },
  boxAvatar: { padding: theme.spacing(4) },
  avatar: {
    height: theme.spacing(40),
    width: theme.spacing(40),
  },
  name: {
    color: colors.HotPink,
    fontWeight: weight.xl,
    letterSpacing: '0.05rem',
  },
  title: {
    fontWeight: 'bold',
    color: colors.ColumbiaBlue,
    letterSpacing: '0.05rem',
  },
  description: {
    color: colors.ColumbiaBlue,
    letterSpacing: '0.05rem',
    fontWeight: weight.s,
  },
}))

export default TeamMemberItem
