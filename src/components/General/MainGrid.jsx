import React from 'react'
import { Grid } from '@material-ui/core'

const MainGrid = ({children,...props}) => {
    return (
      <Grid container item xs={12} justify="center" alignContent="center" {...props}>
        {children}
      </Grid>
    )
}

export default MainGrid
