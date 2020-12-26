import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/images/HeroImage.svg'
import {
    Button , Col, Row
} from 'reactstrap';

const hero = () => {
    return (
        <Row className=" d-flex align-items-center" style={{ padding: '5rem 0'}}>
            <Col sm="6">
                <img src={HeroImage} className="img-fluid" alt="Hero Illustration" />
            </Col >
            <Col sm="6">
                <h1 className="text fw-bolder">Introducing Nowifib</h1>
                <p className="text fs-5" style={{ color: '#516B78' }}>An app that helping you to note your important things.</p>
                <Link to="/signup">
                    <Button className="fs-5 px-3" style={{ backgroundColor: '#57CC99', border: 'none', borderRadius: '24px', color: '#FCF9F9' }}>
                        Get Started
                    </Button>
                </Link>
            </Col >
        </Row>
    )
}

export default hero
