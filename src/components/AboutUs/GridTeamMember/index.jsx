import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TeamMemberItem from './TeamMemberItem'

const membersDumy = [
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
  {
    imageUrl:
      'https://st.depositphotos.com/1001951/2049/i/450/depositphotos_20498165-stock-photo-wild-animal.jpg',
    fullname: 'Miguel Antonio Perez',
    title: 'Miguel Antonio',
    description:
      'Eiusmod laboris consectetur veniam dolore sunt sint officia eu consectetur consequat enim voluptate consequat. Velit nisi labore cillum in quis eiusmod ipsum anim magna ad deserunt veniam. Eiusmod id irure qui amet reprehenderit cupidatat minim amet cillum eu nulla.',
  },
]
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
        {membersDumy.map(({ imageUrl, fullname, title, description }, i) => (
          <TeamMemberItem
            imageUrl={imageUrl}
            fullname={fullname}
            title={title}
            description={description}
            key={i}
          />
        ))}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(20, 0) },
  grid: { rowGap: theme.spacing(14), columnGap: theme.spacing(12) },
}))

export default GridTeamMember
