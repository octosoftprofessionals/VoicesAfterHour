import React from 'react'
import { Grid } from '@material-ui/core'

const MainGrid = ({children}) => {
    return (
        <Grid container item xs={12} justify="center" alignContent="center">
        {children}
        </Grid>
    )
}

export default MainGrid
