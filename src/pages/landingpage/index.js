import React from 'react';
import Content from './content';
import Content2 from './content2';
import Hero from './hero';
import Navbar from '../../components/layout/NavBar';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    Container,
    Row
} from 'reactstrap';
import { scroller } from "react-scroll";

const LandingPage = () => {
    const auth = useSelector((state) => state.firebase.auth)

    const scrollToHome = () => {
        scroller.scrollTo("home", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const scrollToAbout = () => {
        scroller.scrollTo("about", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const scrollToContact = () => {
        scroller.scrollTo("contact", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    if (auth.uid) return <Redirect to='/dashboard' />

    return (
        <>
        <Navbar scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
        <Container>
            <Row className="home">
                <Hero />
            </Row>
            <Row className="about">
                <Content />
            </Row>
            <Row className="contact">
                <Content2 />
            </Row>
        </Container>
        <div className="contact"></div>
        </>
    )
}

export default LandingPage
