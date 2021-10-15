import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ScrollIcon from '@Assets/scrollIcon.svg'
import { colors, weight } from '@Styles'

const Scroll = ({ title, href, children }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.scroll}
    >
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <a href={`#${href}`}>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.boxArrowDown}
        >
          <ScrollIcon className={classes.arrowDown} />
        </Grid>
      </a>
      <section id={href}>{children}</section>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  scroll: {
    padding: theme.spacing(0, 2),
    rowGap: theme.spacing(11),
  },
  title: {
    color: colors.LightCyan,
    fontWeight: weight.xl,
    textTransform: 'uppercase',
  },
  boxArrowDown: { position: 'relative' },
  arrowDown: {
    position: 'absolute',
    bottom: -25,
    animation: '$move 1666ms cubic-bezier(0.71, 0.01, 0.3, 0.99) infinite',
  },
  '@keyframes move': {
    '0%': {
      bottom: -25,
    },
    '50%': {
      bottom: 0,
    },
    '100%': {
      bottom: -25,
    },
  },
}))

export default Scroll
