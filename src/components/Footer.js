import React from 'react'
import footer from '../../src/styles/footer/footer.module.css'
import { Col, NavLink, Row } from 'reactstrap'

const Footer = () => {
    return (
        <>
            <Row className={footer.footer}>
                <div className={footer.innerFooter}>
                    <Col className='my-3'>
                        <h4>About</h4>
                        <NavLink href='#'>Page-1</NavLink>
                        <NavLink href='#'>Page-2</NavLink>
                        <NavLink href='#'>Page-3</NavLink>
                        <NavLink href='#'>Page-4</NavLink>
                        <NavLink href='#'>Page-5</NavLink>
                    </Col>
                    <Col className='my-3'>
                        <h4>Contact</h4>
                        <NavLink href='#'>Page-1</NavLink>
                        <NavLink href='#'>Page-2</NavLink>
                        <NavLink href='#'>Page-3</NavLink>
                        <NavLink href='#'>Page-4</NavLink>
                        <NavLink href='#'>Page-5</NavLink>
                    </Col>
                    <Col className='my-3'>
                        <h4>Social</h4>
                        <NavLink href='#'>Page-1</NavLink>
                        <NavLink href='#'>Page-2</NavLink>
                        <NavLink href='#'>Page-3</NavLink>
                        <NavLink href='#'>Page-4</NavLink>
                        <NavLink href='#'>Page-5</NavLink>
                    </Col>
                </div>
                <div className='text-center py-3'>
                    <span>&#169; Piggibag All Rights Reserved.</span>
                </div>
            </Row>
        </>
    )
}

export default Footer