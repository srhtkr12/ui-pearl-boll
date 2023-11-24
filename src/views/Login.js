import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../styles/login/login.module.css'
import { useLoginUserMutation } from '../redux/users/usersApi'
import { handleUser } from '../components/Actions/HandleUser'
import { handleChange } from '../components/Actions/HandleChange'
import { Container, Form, Label, Col, FormGroup, Input, Button } from 'reactstrap'

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
        <Container className='pt-2'>
            <Link to='/'>Home</Link>
            <div className={login.login}>
                <Form onSubmit={(e) => handleUser(e, user, loginUser)}
                    style={{ backgroundColor: 'teal', padding: '20px', borderRadius: '7px', color: '#fff' }}>
                    <h4>Login here</h4>
                    <FormGroup>
                        <Label
                            for="email"
                        >
                            Email<span>*</span>
                        </Label>
                        <Col>
                            <Input
                                required
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => handleChange(e, user, setUser)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="password"
                        >
                            Password<span>*</span>
                        </Label>
                        <Col>
                            <Input
                                required
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => handleChange(e, user, setUser)}
                            />
                        </Col>
                    </FormGroup>
                    <Col className='d-flex' style={{ flexDirection: 'column' }}>
                        <Button color='primary' className='my-2'>
                            Login
                        </Button>
                        <span>Don't have an account <Link to='/register'>Register</Link> here.</span>
                    </Col>
                </Form>
            </div>
        </Container>
    )
}

export default Login