import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: { flexDirection: ({ right }) => (right ? 'row-reverse' : 'row') },
  image: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '50%',
  },
  button: {
    backgroundColor: ({ backgroundBtn }) =>
      backgroundBtn ?? theme.palette.primary.contrastText,
  },
  title: {},
  description: {},
}))

const Banner = ({
  title,
  description,
  textBtn,
  backgroundBtn,
  imageUrl,
  right,
}) => {
  const classes = useStyles({ imageUrl, right, backgroundBtn })
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      wrap="wrap"
      className={classes.root}
    >
      <Grid
        container
        item
        direction="column"
        alignItems="flex-start"
        xs={12}
        sm={6}
      >
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {description}
        </Typography>
        <Button className={classes.button} variant="contained">
          <Typography variant="caption">{textBtn}</Typography>
        </Button>
      </Grid>
      <Grid container item justify="center" xs={12} sm={6}>
        <Grid item className={classes.image} xs={9} />
      </Grid>
    </Grid>
  )
}

export default Banner
