import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../styles/login/login.module.css'
import { useLoginUserMutation } from '../redux/users/usersApi'
import { handleUser } from '../components/Actions/HandleUser'
import { handleChange } from '../components/Actions/HandleChange'
import { Container, Box, TextField, Button } from '@mui/material';

const Login = () => {
    const [loginUser] = useLoginUserMutation()
    const [user, setUser] = useState({ email: '', password: '' })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!user.email || !user.password) {
    //         return console.log("Please fill in all fields.");
    //     } else {
    //         await axiosApi.local.post('/users/login',
    //             { email: user.email, password: user.password }, { withCredentials: true })
    //             .then((res) => {
    //                 console.log(res.data)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //         e.target.reset();
    //     }
    // };

    return (
        <Container sx={{ py: 2 }}>
            <Link to='/'>Home</Link>
            <Box onSubmit={(e) => handleUser(e, user, loginUser)}
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
                    Login Here
                    <TextField
                        required
                        id="email"
                        type="email"
                        label="Email"
                        variant="standard"
                        placeholder='Email'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <TextField
                        required
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        placeholder='Password'
                        onChange={(e) => handleChange(e, user, setUser)}
                    />
                    <Box >
                        <Button sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            Login
                        </Button>
                        <span>Don't have an account <Link to='/register'>Register</Link> here.</span>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Login