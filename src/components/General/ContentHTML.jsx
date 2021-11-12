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
      md={7}
      container
      justify="center"
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
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 20,
    color: colors.ColumbiaBlue,
    wordBreak: 'break-word',
    '@global': {
      b: { color: 'inherit', letterSpacing: '0.05rem' },
      h1: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
        textShadow: shadows.boxShadow3,
        '& b': { letterSpacing: '0.08rem' },
      },
      h2: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.08rem',
        textShadow: shadows.boxShadow3,
        '& b': { letterSpacing: '0.08rem' },
      },
      h3: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
      },
      h4: {
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
        wordBreak: 'break-word',
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
