import React from 'react';
import ContentHeader from '../content/contentHeader';
import {
    Button, Col, Container, Row, Form, FormGroup, Input
} from 'reactstrap';

const content2 = () => {
    return (
        <Container style={{ paddingBottom: '3rem'}}>
            <Row>
                <ContentHeader
                    title="Get In Touch"
                    content="A good application is one that is supported by its users as well.
                    Please contact us, If you have any suggestions or problems."
                />
            </Row>

            <Row>
                <Col sm="3">
                    <h3>Contact Us :</h3>
                </Col>

                <Col sm="9">
                    <Form>
                        <FormGroup>
                            <Row>
                                <Col sm="6">
                                    <Input type="text" name="name" placeholder="Your name*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} />
                                </Col>
                                <Col sm="6">
                                    <Input type="email" name="email" placeholder="Your email*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup className="py-2">
                            <Input type="text" name="subject" placeholder="Your subject..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} />
                        </FormGroup>

                        <FormGroup className="pb-2">
                            <Input type="textarea" name="text" placeholder="Your message..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} />
                        </FormGroup>

                        <div className="d-flex justify-content-end">
                            <Button className="fs-5 px-4" style={{ backgroundColor: '#57CC99', border: 'none', color: '#FCF9F9' }}>
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default content2

