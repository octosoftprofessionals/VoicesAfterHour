import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, weight, shadows } from '@Styles'
const ContentHTML = ({ content }) => {
  const classes = useStyle()
  return (
    <Grid
      item
      xs={10}
      md={6}
      container
      justify="center"
      alignItems="center"
      className={classes.box}
    >
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(JSON.parse(content)),
        }}
      />
    </Grid>
  )
}
const useStyle = makeStyles((theme) => ({
  box: { marginBottom: theme.spacing(20) },
  content: {
    color: theme.palette.common.white,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    gap: 20,
    color: colors.ColumbiaBlue,
    '@global': {
      b: { color: 'inherit', letterSpacing: '0.05rem' },
      h1: {
        display: 'flex',
        flex: 1,
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
      },
      h2: {
        display: 'flex',
        flex: 1,
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.08rem',
        textShadow: shadows.boxShadow3,
        '& b': { letterSpacing: '0.08rem' },
      },
      h3: {
        display: 'flex',
        flex: 1,
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
      },
      h4: {
        display: 'flex',
        flex: 1,
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
      },
      p: {
        fontSize: '1rem',
        letterSpacing: '0.05rem',
        marginBlock: 0,
        color: colors.LightCyan,
      },
      u: {
        color: colors.WildStrawberry,
        letterSpacing: '0.10rem',
        fontWeight: weight.l,
        '&:hover': {
          color: colors.Razzmatazz,
        },
      },
      'li::marker': {
        color: colors.WildStrawberry,
        fontSize: '1rem',
      },
    },
    '@media (max-width: 576px)': {
      fontSize: 14,
    },
  },
}))
export default ContentHTML
