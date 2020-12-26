import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const SignedOutLinks = (props) => {

    return (
        <>
            <NavbarToggler onClick={props.toggle} />
            <Collapse isOpen={props.isOpen} navbar>
                <Nav className="ml-auto text fs-5" navbar>
                    <NavItem className="mx-3">
                        <NavLink onClick={props.scrollToHome} id={props.scrollState !== 'top' ? 'NavLinkBlack' : 'NavLink'}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={props.scrollToAbout} id={props.scrollState !== 'top' ? 'NavLinkBlack' : 'NavLink'}>About</NavLink>
                    </NavItem>
                    <NavItem className="mx-3">
                        <NavLink onClick={props.scrollToContact} id={props.scrollState !== 'top' ? 'NavLinkBlack' : 'NavLink'}>Contact</NavLink>
                    </NavItem>
                    <NavItem className="d-flex align-items-center">
                        <Link to="/signin">
                            <Button className="ml-2 px-3" style={{ backgroundColor: '#57CC99', border: 'none', borderRadius: '1.25rem', color: '#FCF9F9', fontWeight: '500' }}>
                                Sign In
                            </Button>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </>
    )
}

export default SignedOutLinks
