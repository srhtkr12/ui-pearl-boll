import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleUser } from '../components/Actions/HandleUser'
import { useAddNewUserMutation } from '../redux/users/usersApi'
import { handleChange } from '../components/Actions/HandleChange'
import { Container, Box, Button, Typography, TextField, Checkbox } from '@mui/material';

const Register = () => {
    const [addNewUser] = useAddNewUserMutation()
    const [user, setUser] = useState({
        firstName: '',
        cPassword: '',
        password: '',
        lastName: '',
        email: '',
        tnc: ''
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addNewUser(user).then((res) => {
    //         console.log(res)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    //     e.target.reset();
    // }

    return (
        <Container sx={{ py: 2 }}>
            <Link to='/'>Home</Link>
            <Box onSubmit={(e) => handleUser(e, user, addNewUser)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        display: 'flex',
                        borderRadius: 5,
                        color: '#fff',
                        flexDirection: 'column',
                        backgroundColor: 'gray',
                        py: 15, px: 20
                    }}>
                    <Typography>Register here</Typography>
                    <TextField
                        required
                        id="firstName"
                        name='firstName'
                        type="text"
                        label="First Name"
                        variant="standard"
                        placeholder='First Name'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <TextField
                        required
                        id="lastName"
                        name='lastName'
                        type="text"
                        label="Last Name"
                        variant="standard"
                        placeholder='Last Name'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <TextField
                        required
                        id="email"
                        name='email'
                        type="email"
                        label="Email"
                        variant="standard"
                        placeholder='Email'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <TextField
                        required
                        id="password"
                        name='password'
                        type="password"
                        label="Password"
                        variant="standard"
                        placeholder='Password'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <TextField
                        required
                        id="cPassword"
                        name='cPassword'
                        type="password"
                        label="Confirm Password"
                        variant="standard"
                        placeholder='Confirm Password'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <Box>
                        <Checkbox
                            // onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Box>
                    <Box >
                        <Button sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            Register
                        </Button>
                        <span>Already have an account <Link to='/login'>Login</Link> here.</span>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Register