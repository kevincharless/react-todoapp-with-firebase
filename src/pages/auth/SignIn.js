import React from 'react';
import NavBar from '../../components/layout/NavBar';
import useLogin from '../../customhook/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/action/authActions';
import { Link, Redirect } from 'react-router-dom';

import SignInImage from '../../assets/images/mobile-login-bro.svg';

import {
    Button , Col, Container, Form, FormGroup, Input, Label, Row
} from 'reactstrap';

const SignIn = () => {
    const [email, bindEmail, resetEmail] = useLogin()
    const [password, bindPassword, resetPassword] = useLogin()
    
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.firebase.auth)
    const authError = useSelector((state) => state.auth.authError)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(signIn({ email, password }))
        if (authError) {
            resetEmail()
            resetPassword()
        }
    }
    
    if (auth.uid) return <Redirect to='/dashboard' />

    return (
        <>
            <NavBar noLink />
            <Container>
                <Row className=" d-flex align-items-center" style={{ paddingTop: '3rem'}}>
                    <Col sm="6">
                        <Form onSubmit={handleSubmit}>
                            <h1 className="text fw-bolder text-center pb-4">Sign In</h1>
                            <FormGroup className="py-2">
                                <Label className="text fs-5" for="email" style={{ color: '#516B78' }}>Email Address :</Label>
                                <Input type="email" name="email" placeholder="Your Email*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindEmail} />
                            </FormGroup>
                            <FormGroup className="pt-2">
                                <Label className="text fs-5" for="password" style={{ color: '#516B78' }}>Password :</Label>
                                <Input type="password" name="password" placeholder="Your Password*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindPassword} />
                            </FormGroup>

                            <div className="text-danger">
                                { authError ? <p className="p-0 m-0">{authError}</p> : null}
                            </div>

                            <div className="d-flex justify-content-end pt-4">
                                <Button className="fs-5 px-4" style={{ backgroundColor: '#57CC99', border: 'none', borderRadius: '24px', color: '#FCF9F9' }}>
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                    </Col>

                    <Col sm="6">
                        <img src={SignInImage} className="img-fluid" alt="Login Illustration" />
                    </Col >
                </Row>
                <Row>
                    <p className="text text-center fs-5" style={{ color: '#263238' }}>
                        Don’t have account ? *
                        <Link id="TextButton" to="/signup">
                            Sign Up Now
                        </Link>
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default SignIn
