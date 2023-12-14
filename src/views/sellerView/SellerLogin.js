import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAddNewSalerMutation } from '../../redux/salers/salersApi'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const SalerLogin = () => {

    const [addNewUser] = useAddNewSalerMutation()
    const [product, setProduct] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        addNewUser(product).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        e.target.reset();
    }
    return (
        <Grid xs={4} sx={{
            p: 0,
            m: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '95vh',
            backgroundColor: '#9ee7f5'
        }}>
            <Box>
                <Typography>Saler Login</Typography>
                <Box
                    component='form'
                    onClick={handleAddProduct}
                    sx={{
                        pt: 2,
                        pb: 4,
                        display: 'grid',
                        gap: 2,
                        gridTemplateRows: 'repeat(3, 1fr)'
                    }}>
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Email"
                        defaultValue=""
                        placeholder='Email'
                        onChange={handleChange}
                    // helperText="Incorrect entry."
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Password"
                        defaultValue=""
                        placeholder='Password'
                        onChange={handleChange}
                    // helperText="Incorrect entry."
                    />
                    <Button variant="contained" size="small">
                        Login
                    </Button>
                </Box>
                Don't have a saler account <Link to='/seller/register' > Register </Link>here.
            </Box>
        </Grid>
    )
}

export default SalerLogin