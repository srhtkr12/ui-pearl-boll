import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

const SalerSidebar = () => {
    return (
        <Grid xs={2} sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100%',
            backgroundColor: '#6699CC'
        }}>
            <Box sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                fontSize: 20,
                color: '#fff',
                textDecoration: 'none'
            }}>
                <Link to={'/apps/seller'}>Home</Link>
                <Link to={'/apps/seller/profile'}>Profile</Link>
                <Link>Products</Link>
                <Link>SalerSidebar</Link>
                <Link>SalerSidebar</Link>
            </Box>
        </Grid>
    )
}

export default SalerSidebar