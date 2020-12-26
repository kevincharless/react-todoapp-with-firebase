import React from 'react';
import ContentCard from './contentCard';
import ContentHeader from './contentHeader';
import {
    Container, Row, Col
} from 'reactstrap';
import crossplatform from '../../../assets/images/cross-platform.svg';
import shield from '../../../assets/images/shield.svg';
import ux from '../../../assets/images/uxinterface.svg';

const content = () => {
    return (
        <Container style={{ paddingBottom: '5rem'}}>
            <Row>
                <ContentHeader
                    title="Nowifib About"
                    content="We keep to improve our application to provide the best experience for our users."
                />
            </Row>
            <Row className="d-flex justify-content-center">
                <Col sm="4">
                    <ContentCard 
                        cardImage={shield}
                        cardTitle="High Security."
                        cardContent="Your privacy is our top priority. Whatever you write, it will not be seen by others."
                    />
                </Col>
                <Col sm="4">
                    <ContentCard 
                        cardImage={ux}
                        cardTitle="Easy to Use"
                        cardContent="Great design make user easy to use the application and can enjoy when using it."
                    />
                </Col>
                <Col sm="4">
                    <ContentCard
                        cardImage={crossplatform}
                        cardTitle="Website Based"
                        cardContent="Website-Based to help users to use this app on any device and platform."
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default content
