import React, { useState, useEffect } from 'react';
import {
    Container,
    Navbar,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/action/authActions';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = (props) => {
    const auth = useSelector((state) => state.firebase.auth)
    const profile = useSelector((state) => state.firebase.profile)
    
    const dispatch = useDispatch();
    const handleSignOut = () => dispatch(signOut())

    const logoLink = auth.uid ? '/dashboard' : '/'

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [scrollState, setScrollState] = useState("top")
    useEffect(() => {
        let listener = null
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 100) {
                if (scrollState !== "notTop") {
                    setScrollState("notTop")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])



    return (
            <Navbar fixed="top" expand="md" id={scrollState !== 'top' ? 'NavBlack' : null}>
                <Container className="my-3">
                    <Link id={scrollState !== 'top' ? 'NavBrandBlack' : 'NavBrand'} className="text fs-3 fw-bold" to={logoLink}>
                        nowifib.
                    </Link>

                    {!props.noLink ? (
                        auth.uid ? (
                            <SignedInLinks handleSignOut={handleSignOut} profile={profile} scrollState={scrollState} />
                        ) : (
                            <SignedOutLinks isOpen={isOpen} scrollState={scrollState} scrollToHome={props.scrollToHome} scrollToAbout={props.scrollToAbout} scrollToContact={props.scrollToContact} toggle={toggle} />
                        )
                    ) : (
                        null
                    )
                    }                    

                    
                    
                </Container>
            </Navbar>
    )
}

export default NavBar
