import React from 'react'

import { Grid, Typography, InputAdornment, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'

import PrimaryInput from '../../../PrimaryInput'
import { colors } from '../../../Styles/Color'

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(4),
  },
  IconSend: {
    fill: colors.SummerSky,
  },
  priInput: {
    '@global': {
      '.MuiFilledInput-root': {
        backgroundColor: 'rgb(73 118 171 / 49%)',
      },
    },
  },
}))
const FormSubscribe = ({ setEmail, email, handleSubmit }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={3} container wrap="wrap" className={classes.root}>
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

export default FormSubscribe
