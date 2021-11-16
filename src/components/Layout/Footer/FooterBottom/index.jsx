import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import SocialIcons from './SocialIcons'
import { colors } from '../../../Styles/color'

const FooterBottom = ({ mail, copyright, socialMedia }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      wrap="wrap"
      className={classes.bottomBar}
    >
      <Grid item xs={12} sm={4} md={3} container justify="center">
        <Typography variant="body1" className={classes.bottomText}>
          {copyright}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} md={3} container justify="center">
        <Typography variant="body1" className={classes.bottomText}>
          {`Email: ${mail}`}
        </Typography>
      </Grid>
      <SocialIcons socialMedia={socialMedia} />
    </Grid>
  )
}
const useStyles = makeStyles((theme) => ({
  bottomBar: {
    background: colors.MidnightBlueFooter,
    color: theme.palette.common.white,
    padding: theme.spacing(2, 0),
    minHeight: `${theme.spacing(3)}vh`,
    rowGap: theme.spacing(4),
    columnGap: theme.spacing(4),
  },
  bottomText: {
    color: theme.palette.common.white,
    textAlign: 'center',
    fontSize: '0.75rem',
  },
}))

export default FooterBottom
