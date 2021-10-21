import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Hidden, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'

import { submitForm } from '@Utils'
import { PrimaryInput } from '@Components'
import { colors, shadows, weight } from '@Styles'

const Contact = ({ imgUrl }) => {
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState('')

  const classes = useStyles({ imgUrl })

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm('contact', {
      fullName,
      subject,
      email,
      phone,
      content,
    })
      .then(() =>
        alert('Your message was received. We will contact you shortly.')
      )
      .catch((error) => alert(error))

    setFullName('')
    setSubject('')
    setEmail('')
    setPhone('')
    setContent('')
  }

  return (
    <form name="contact" onSubmit={handleSubmit} data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <Grid container justify="center">
        <Grid
          item
          container
          justifyContent="space-between"
          className={classes.root}
        >
          <Hidden smDown>
            <Grid item sm={4} container>
              <div className={classes.img} />
            </Grid>
          </Hidden>

          <Grid item xs={11} sm={7} container className={classes.boxForm}>
            <Grid item xs={6} className={classes.gridItem}>
              <PrimaryInput
                id="fullName"
                value={fullName}
                name="fullName"
                onChange={({ target }) => setFullName(target.value)}
                label="Full name"
                required
                color={colors.MidnightBlue}
              />
            </Grid>
            <Grid item xs={6}>
              <PrimaryInput
                id="SubjectInput"
                value={subject}
                name="subject"
                onChange={({ target }) => setSubject(target.value)}
                label="Subject (Optional)"
                color={colors.MidnightBlue}
              />
            </Grid>
            <Grid item xs={6} className={classes.gridItem}>
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                type="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Your Email"
                required
                color={colors.MidnightBlue}
              />
            </Grid>
            <Grid item xs={6}>
              <PrimaryInput
                id="PhoneInput"
                value={phone}
                name="phone"
                onChange={({ target }) => setPhone(target.value)}
                label="Your Phone Number"
                required
                color={colors.MidnightBlue}
              />
            </Grid>

            <Grid item xs={12}>
              <PrimaryInput
                id="ContentInput"
                value={content}
                name="content"
                label="Your Message"
                onChange={({ target }) => setContent(target.value)}
                multiline
                rows={12}
                color={colors.MidnightBlue}
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={11}
          sm={12}
          container
          justifyContent="flex-end"
          className={classes.buttonContainer}
        >
          <Button
            variant="contained"
            type="submit"
            className={classes.button}
            endIcon={<Send />}
          >
            <Typography variant="subtitle1" className={classes.btnTxt}>
              Send
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  boxForm: { rowGap: theme.spacing(4) },
  img: {
    width: '100%',
    height: '100%',
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  gridItem: { paddingRight: theme.spacing(5) },
  buttonContainer: { paddingBottom: theme.spacing(6) },
  button: {
    width: 200,
    borderRadius: 10,
    backgroundColor: colors.HotPink,
    boxShadow: shadows.boxShadow4,
  },
  btnTxt: {
    fontWeight: weight.m,
  },
  '@global': {
    '.MuiFilledInput-root': {
      backgroundColor: colors.LightCyan,
    },
    '.MuiFilledInput-root:hover': {
      backgroundColor: colors.LightCyanSoft,
    },
    '.MuiInputBase-input': {
      color: colors.MidnightBlue,
      fontFamily: theme.typography.fontFamily[0],
    },
    '.MuiFilledInput-root.Mui-focused': {
      backgroundColor: colors.LightCyanSoft,
    },
    '.MuiFilledInput-underline:after': {
      borderBottom: `2px solid ${colors.HotPink}`,
    },
  },
}))

export default Contact
