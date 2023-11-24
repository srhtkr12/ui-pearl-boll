import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleUser } from '../components/Actions/HandleUser'
import register from '../styles/register/register.module.css'
import { useAddNewUserMutation } from '../redux/users/usersApi'
import { handleChange } from '../components/Actions/HandleChange'
import { Input, Label, Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';

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
        <>
            <Container className={register.register}>
                <Link to='/'>Home</Link>
                <div className={register.innerForm}>
                    <Form onSubmit={(e) => handleUser(e, user, addNewUser)}
                        style={{ width: '500px', backgroundColor: 'teal', padding: '20px', borderRadius: '7px', color: '#fff' }}>
                        <h4>Register Here</h4>
                        <Row className={register.formTags}>
                            <Col className='d-flex gap-2'>
                                <Col>
                                    <FormGroup>
                                        <Label for="firstname">
                                            First Name<span>*</span>
                                        </Label>
                                        <Input
                                            required
                                            type="text"
                                            id="firstname"
                                            name="firstName"
                                            placeholder="First Name"
                                            onChange={(e) => handleChange(e, user, setUser)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="lastname">
                                            Last Name<span>*</span>
                                        </Label>
                                        <Input
                                            required
                                            type="text"
                                            id="lastname"
                                            name="lastName"
                                            placeholder="Last Name"
                                            onChange={(e) => handleChange(e, user, setUser)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="email">
                                        Email address<span>*</span>
                                    </Label>
                                    <Input
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        onChange={(e) => handleChange(e, user, setUser)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className='d-flex gap-2'>
                                <Col>
                                    <FormGroup>
                                        <Label for="password">
                                            Password<span>*</span>
                                        </Label>
                                        <Input
                                            required
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => handleChange(e, user, setUser)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="cPassword">
                                            Confirm Password<span>*</span>
                                        </Label>
                                        <Input
                                            required
                                            id="cPassword"
                                            type="password"
                                            name="cPassword"
                                            placeholder="Confirm Password"
                                            onChange={(e) => handleChange(e, user, setUser)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                required
                                id="tnc"
                                name="tnc"
                                value='true'
                                type="checkbox"
                                onChange={(e) => handleChange(e, user, setUser)}
                            />
                            <Label
                                check
                                for="tnc"
                            >
                                Accept terms & conditions.<span>*</span>
                            </Label>
                        </FormGroup>
                        <Col className='d-flex' style={{ flexDirection: 'column' }}>
                            <Button color='primary' className='my-2'>
                                Register
                            </Button>
                            <span>Already have an account <Link to='/login'>Login</Link> here.</span>
                        </Col>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Register