import React from 'react'
import { Link } from 'gatsby'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '@Styles'
import LogoVAH from '@Assets/Footer-VAH-icon.svg'

import FormSubscribe from './FormSubscribe'
import FooterNav from './FooterNav'

const FooterTop = ({ handleSubmit, email, setEmail, socialMedia }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      wrap="wrap"
      className={classes.toolbar}
    >
      <Grid item xs={12} sm={2} container justify="center">
        <Link to={'/'} className={classes.link}>
          <LogoVAH />
        </Link>
      </Grid>

      <FooterNav socialMedia={socialMedia} />

      <FormSubscribe
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(2, 0),
    background: colors.MidnightBlue,
    minHeight: `${theme.spacing(7)}vh`,
    rowGap: theme.spacing(6),
  },
  link: { textDecoration: 'none' },
}))

export default FooterTop
