import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography, InputAdornment, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'

import PrimaryInput from '../PrimaryInput'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    boxShadow: 'inset 0 2px 3px #ccc',
    padding: theme.spacing(2, 4),
    color: 'black',
    background: '#fff',
  },
  section: {
    flex: 1,
    minWidth: theme.spacing(25),
  },
  sectionTitle: {
    color: '#37add4',
    fontSize: theme.typography.fontSize,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: 'gray',
    paddingTop: theme.spacing(1),
    fontSize: theme.typography.fontSize,
  },
  formContainer: {
    paddingTop: theme.spacing(1),
  },
  IconSend: {
    fontSize: theme.typography.fontSize,
    fill: '#37add4',
  },
}))

const FooterTop = ({ handleSubmit, email, setEmail }) => {
  const classes = useStyles()
  return (
    <Grid container justify="space-around" className={classes.toolbar}>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography variant="caption" className={classes.sectionTitle}>
          Home
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Link className={classes.link} to="/">
            <Typography variant="body1" className={classes.linkText}>
              Home
            </Typography>
          </Link>

          <Link className={classes.link} to="/aboutUs">
            <Typography variant="body1" className={classes.linkText}>
              About Us
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography variant="body1" className={classes.sectionTitle}>
          Contact Us
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Link className={classes.link} to="/contactUs">
            <Typography variant="body1" className={classes.linkText}>
              Contact Us
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>Programing</Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Link className={classes.link} to="/Programing/podcast">
            <Typography variant="body1" className={classes.linkText}>
              Podcast
            </Typography>
          </Link>
          <Link className={classes.link} to="/Programing/radio">
            <Typography variant="body1" className={classes.linkText}>
              Radio
            </Typography>
          </Link>
          <Link className={classes.link} to="/Programing/shows">
            <Typography variant="body1" className={classes.linkText}>
              Shows
            </Typography>
          </Link>
          <Link className={classes.link} to="/Programing/sponsors">
            <Typography variant="body1" className={classes.linkText}>
              Sponsors
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.section}>
        <Typography className={classes.sectionTitle}>SUBSCRIBE</Typography>
        <Typography variant="body1" className={classes.linkText}>
          Don't miss out on our latest news
        </Typography>
        <div className={classes.formContainer}>
          <form name="contact" onSubmit={handleSubmit} data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <PrimaryInput
              id="EmailInput"
              value={email}
              name="email"
              onChange={({ target }) => setEmail(target.value)}
              label="Your Email"
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
        </div>
      </Grid>
    </Grid>
  )
}

export default FooterTop
