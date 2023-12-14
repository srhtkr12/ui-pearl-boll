import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SalerRegister = () => {
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
                <Typography>Saler Register</Typography>
                <Box sx={{ pt: 2, pb: 4, display: 'grid', gap: 2, gridTemplateRows: 'repeat(3, 1fr)' }}>
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Username"
                        defaultValue=""
                        placeholder='Username'
                    // helperText="Incorrect entry."
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Email"
                        defaultValue=""
                        placeholder='Email'
                    // helperText="Incorrect entry."
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Password"
                        defaultValue=""
                        placeholder='Password'
                    // helperText="Incorrect entry."
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Confirm Password"
                        defaultValue=""
                        placeholder='Password'
                    // helperText="Incorrect entry."
                    />

                    <FormControlLabel
                        control={
                            <Checkbox checked={true} name="antoine" />
                        }
                        label="TnC Apply."
                    />
                    {/* <FormHelperText>You can display an error</FormHelperText> */}
                    <Button variant="contained" size="small">
                        Register
                    </Button>
                </Box>
                Already have a saler account <Link to='/seller/login' > Login </Link>here.
            </Box>
        </Grid >
    )
}

export default SalerRegister