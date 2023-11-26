import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Box } from '@mui/material';

const Header = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Box>
                    <div>Scroll Bar</div>
                </Box>
            </Container>
        </>
    )
}

export default Header