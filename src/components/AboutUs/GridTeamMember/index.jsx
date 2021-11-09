import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TeamMemberItem from './TeamMemberItem'

const GridTeamMember = ({ members }) => {
  const classes = useStyles()
  return (
    <Grid item container justify="center" className={classes.root}>
      <Grid
        container
        item
        xs={12}
        sm={8}
        justify="center"
        className={classes.grid}
      >
        {members.map(({ node: { image, name, shortBio, title } }, i) => (
          <TeamMemberItem
            imageUrl={image.file.url}
            fullname={name}
            title={title}
            description={shortBio.shortBio}
            key={i}
          />
        ))}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(6, 0, 20) },
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(18) },
}))

export default GridTeamMember
