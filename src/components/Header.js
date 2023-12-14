import React from 'react'
import { Grid } from '@mui/material';
import NavBar from '../components/Bars/NavBar'
import MenuBar from '../components/Bars/MenuBar'

const Header = () => {
    const User = JSON.parse(localStorage.getItem('User'))

    return (
        <Grid>
            {User?.email ? <MenuBar /> : <NavBar />}
        </Grid>
    )
}

export default Header