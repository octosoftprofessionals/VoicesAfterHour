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
    gap: 4,
    color: colors.ColumbiaBlue,
    wordBreak: 'break-word',
    '@global': {
      b: {
        color: 'inherit',
        letterSpacing: '0.05rem',
        paddingTop: theme.spacing(3),
      },
      h1: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.05rem',
        textShadow: shadows.boxShadow3,
        '& b': { letterSpacing: '0.08rem' },
        paddingBottom: theme.spacing(2),
      },
      h2: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.08rem',
        '& b': { letterSpacing: '0.08rem' },
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      h3: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.08rem',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
      },
      h4: {
        marginBlock: 0,
        color: 'inherit',
        letterSpacing: '0.08rem',
        paddingTop: theme.spacing(1),
      },
      p: {
        fontSize: '1rem',
        letterSpacing: '0.07rem',
        marginBlock: 0,
        color: colors.LightCyan,
        lineHeight: 1.5,
      },
      a: {
        textDecoration: 'none',
      },
      ul: { marginBlock: 0, padding: theme.spacing(2, 0) },
      u: {
        color: colors.HotPinkLink,
        letterSpacing: '0.10rem',
        fontWeight: weight.l,
        wordBreak: 'break-word',
        '&:hover': {
          color: colors.HotPink,
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
