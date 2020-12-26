import React from 'react'
import { Link } from 'react-router-dom';
import {
    Button,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

const SignedInLinks = (props) => {
    const profile = props.profile
    return (
        <>
            <Nav className="ml-auto text fs-5" navbar>
                    <NavItem className="mx-3">
                        <NavbarText className="align-middle" id={props.scrollState !== 'top' ? 'NavLinkGrey' : 'NavLinkNotGrey'}>
                            { `Welcome, ${profile.firstName} ${profile.lastName}`}
                        </NavbarText>
                    </NavItem>
                    <NavItem className="d-flex align-items-center">
                        <Link to="/signin">
                            <Button className="ml-2 px-3" onClick={props.handleSignOut} style={{ backgroundColor: '#57CC99', border: 'none', borderRadius: '1.25rem', color: '#FCF9F9', fontWeight: '500' }}>
                                Log Out
                            </Button>
                        </Link>
                    </NavItem>
                </Nav>

            {/* <div className="container collapse navbar-collapse ml-0 my-4 fs-5 text">
                <div className="mx-4">
                    { `Welcome, ${profile.firstName} ${profile.lastName}`}
                </div>

                <Link to="/">
                    <button className="btn fs-5 text" style={{ backgroundColor: '#57CC99', borderRadius: '18px', color: '#FCF9F9' }} onClick={props.handleSignOut}>
                        Logout
                    </button>
                </Link>
            </div> */}


        </>
    )
}

export default SignedInLinks
