import React from 'react'

import { Grid, Typography, InputAdornment, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'

import { PrimaryInput } from '@Components'
import { colors } from '@Styles'

const FormSubscribe = ({ setEmail, email, handleSubmit }) => {
  const classes = useStyles()
  return (
    <Grid item xs={11} sm={3} container wrap="wrap" className={classes.root}>
      <Typography variant="body1" color="primary">
        Subscribe to our newsletter
      </Typography>

      <Grid item xs={12}>
        <form name="contact" onSubmit={handleSubmit} data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <PrimaryInput
            className={classes.priInput}
            id="EmailInput"
            value={email}
            name="email"
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            variant="filled"
            type="email"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <Send className={classes.IconSend} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(4),
  },
  IconSend: {
    fill: colors.HotPink,
  },
  priInput: {
    '@global': {
      '.MuiFilledInput-root': {
        backgroundColor: colors.ShipCoveSoft,
      },
      '.MuiFilledInput-adornedEnd': {
        paddingRight: theme.spacing(1),
      },
      '.MuiFilledInput-root:hover': {
        backgroundColor: colors.ShipCoveSoftHov,
      },
      '.MuiInputBase-input': {
        fontFamily: theme.typography.fontFamily[0],
        color: colors.Tolopea,
      },
      '.MuiFilledInput-root.Mui-focused': {
        backgroundColor: colors.ShipCoveSoftHov,
      },
      '.MuiFilledInput-underline:after': {
        borderBottom: `2px solid ${colors.HotPink}`,
      },
    },
  },
}))

export default FormSubscribe
