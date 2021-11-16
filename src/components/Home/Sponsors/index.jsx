import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SponsorsItem from './SponsorsItem'
import { colors } from '@Styles'

const Sponsors = ({ sponsors }) => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid container item xs={10} justifyContent="center">
        <Typography variant="h2" className={classes.title}>
          SPONSORS
        </Typography>
      </Grid>
      <Grid container item xs={11} justifyContent="center">
        {sponsors.map(({ node }) => (
          <SponsorsItem
            key={node.sponsorName}
            sponsorName={node.sponsorName}
            imageUrl={node.image}
          />
        ))}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(20, 0, 30),
  },
  title: {
    fontFamily: theme.typography.fontFamily[1],
    color: colors.ColumbiaBlue,
    letterSpacing: '0.02rem',
  },
}))
export default Sponsors
