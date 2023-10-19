import React from 'react'
import navBar from '../styles/navebar/navebar.module.css'
import { AppContent } from '../navigations/Navigates'
import { Container, Navbar, NavItem, NavLink, Row } from 'reactstrap'
import SearchBar from '../components/SearchBar'

const NavBar = () => {

    return (
        <>
            <div className={navBar.navBar}>
                <Container>
                    <Row className={navBar}>
                        <SearchBar />
                        <Navbar className={navBar.routeBar}>
                            <NavItem className='d-flex flex-row gap-3'>{
                                AppContent.map((route, i) => (
                                    <NavLink key={i} href={route.navelink}>{route.title}</NavLink>
                                ))
                            }</NavItem>

                        </Navbar>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NavBar