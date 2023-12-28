import React, { useState } from 'react'
import { AuthService } from '../helper/jwsStore'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/users/usersApi'
import { Container, Box, Button, Typography } from '@mui/material';
import { TextInputFields } from '../components/FormComponents/TextInputFields';

const Login = () => {
    const navigate = useNavigate()
    const [loginUser, status, isLoading] = useLoginUserMutation()
    const [user, setUser] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    console.log('status', status)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            return console.log("Please fill in all fields.");
        } else {
            await loginUser({ email: user.email, password: user.password }, { withCredentials: true })
                .then((res) => {
                    if (res.data.status === 200) {
                        navigate('/')
                    }
                }).catch((err) => {
                    console.log('err', err)
                })
        }
    };

    return (
        <Container sx={{ py: 2 }}>
            <Link to='/'>Home</Link>
            <Box sx={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px solid #fff',
            }}
                noValidate
                autoComplete="off"
            >
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{
                        py: 2,
                        px: 4,
                        borderRadius: 2,
                        textJustify: 'center',
                        backgroundColor: 'ghostwhite',
                        display: 'grid',
                        gap: 2,
                        gridTemplateRows: 'repeat(3, 1fr)'
                    }}>
                    <Typography variant='h4' sx={{ m: 0, p: 0 }}>User Login</Typography>
                    {Object.keys(user).map((item, i) => (
                        < TextInputFields
                            key={i}
                            name={item}
                            type={item === 'email' ? 'email' : 'password'}
                            label={item}
                            // placeholder={item ? '' : item}
                            value={user[item]}
                            handleChange={handleChange}
                        />
                    ))}
                    <Button type='submit' variant="contained" size="small" sx={{ width: '100px', height: '40px' }}>
                        Login
                    </Button>
                    <Typography>Don't have an account <Link to='/register'>Register</Link> here.</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Login