import React from 'react'

import { FormControl, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors, weight } from '@Styles'

const useStyles = makeStyles((theme) => ({
  input: {
    '& div': {
      borderRadius: 4,
    },
    '& div::before': {
      borderRadius: 4,
      borderBottom: 'none',
    },
    '& input': {
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    '& label': {
      transform: 'translate(12px, 18px) scale(1)',
      color: ({ color }) => color ?? theme.palette.primary.contrastText,
    },
    '& label span': {
      display: 'none',
    },
    '& label.MuiInputLabel-shrink': {
      transform: 'translate(12px, 6px) scale(0.75)',
      letterSpacing: '0.05rem',
      color: ({ color }) => color ?? theme.palette.primary.contrastText,
    },
  },
}))

const PrimaryInput = ({ className, color, ...otherProps }) => {
  const classes = useStyles({ color })
  return (
    <FormControl variant="filled" size="small" fullWidth>
      <TextField
        className={`${classes.input} ${className}`}
        variant="filled"
        s
        {...otherProps}
      />
    </FormControl>
  )
}

export default PrimaryInput
