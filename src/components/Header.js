import React from 'react'
import header from '../styles/header/header.module.css'
import NavBar from '../components/NavBar'
import { Container, Row } from 'reactstrap'

const Header = () => {
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className={header.header}>
                    <div>Scroll Bar</div>
                </Row>
            </Container>
        </>
    )
}

export default Header