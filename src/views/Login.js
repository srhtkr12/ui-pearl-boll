import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/users/usersApi'
import { Container, Box, TextField, Button } from '@mui/material';

const Login = () => {
    const navigate = useNavigate()
    const [loginUser] = useLoginUserMutation()
    const [user, setUser] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            return console.log("Please fill in all fields.");
        } else {
            await loginUser({ email: user.email, password: user.password }, { withCredentials: true })
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            e.target.reset();
            navigate('/')
        }
    };

    return (
        <Container sx={{ py: 2 }}>
            <Link to='/'>Home</Link>
            <Box onSubmit={(e) => handleSubmit(e)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    border: '2px solid #fff',
                }}
                noValidate
                autoComplete="off"
            >
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        display: 'flex',
                        borderRadius: 5,
                        flexDirection: 'column',
                        backgroundColor: '#2c387e',
                        py: 15, px: 20,
                    }}>
                    Login Here
                    <TextField
                        required
                        name="email"
                        type="email"
                        label="Email"
                        variant="standard"
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        placeholder='Password'
                        onChange={handleChange}
                    />
                    <Box >
                        <Button type='submit' sx={{
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