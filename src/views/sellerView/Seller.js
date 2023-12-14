import React from 'react'
import { Grid } from '@mui/material'
import { SellerFooter } from '../../components/sellers/SellerFooter'
import { SellerProtectedRoute } from '../../routes/ProtectedRoute';
import SalerSidebar from '../../components/sellers/SellerSidebar';
import SellerMenubar from '../../components/sellers/SellerMenubar'

const Seller = () => {
    return (
        <Grid sx={{ backgroundColor: '#003B6D' }}>
            <SellerMenubar />
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <SalerSidebar />
                <Grid xs={9.5}>
                    <SellerProtectedRoute />
                </Grid>
            </Grid>
            <SellerFooter />
        </Grid>
    )
}

export default Seller