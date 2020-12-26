import React from 'react';
import NavBar from '../../components/layout/NavBar';
import useLogin from '../../customhook/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/action/authActions';
import { Link, Redirect } from 'react-router-dom';

import SignUpImage from '../../assets/images/mobile-login-pana.svg';

import {
    Button , Col, Container, Form, FormGroup, Input, Label, Row
} from 'reactstrap';

const SignUp = () => {
    const [firstName, bindFirstName, resetFirstName] = useLogin()
    const [lastName, bindLastName, resetLastName] = useLogin()
    const [email, bindEmail, resetEmail] = useLogin()
    const [password, bindPassword, resetPassword] = useLogin()

    const auth = useSelector((state) => state.firebase.auth)
    const authError = useSelector((state) => state.auth.authError)

    const dispatch = useDispatch()

    const newUser = { firstName, lastName, email, password }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(firstName, lastName, email, password)
        dispatch(signUp(newUser))
        if (authError) {
            resetFirstName()
            resetLastName()
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
                        <img src={SignUpImage} className="img-fluid" alt="Login Illustration" />
                    </Col >

                    <Col sm="6">
                        <Form onSubmit={handleSubmit}>
                            <h1 className="text fw-bolder text-center pb-4">Sign Up</h1>
                            <FormGroup className="pt-2">
                                <Label className="text fs-5" for="firstName" style={{ color: '#516B78' }}>First Name :</Label>
                                <Input type="text" name="firstName" placeholder="Your Email*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindFirstName} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text fs-5" for="lastName" style={{ color: '#516B78' }}>Last Name :</Label>
                                <Input type="text" name="lastName" placeholder="Your Email*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindLastName} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text fs-5" for="email" style={{ color: '#516B78' }}>Email Address :</Label>
                                <Input type="email" name="email" placeholder="Your Email*" style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindEmail} />
                            </FormGroup>
                            <FormGroup>
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
                </Row>
                <Row>
                    <p className="text text-center fs-5" style={{ color: '#263238' }}>
                        Already have account ? *
                        <Link id="TextButton" to="/signin">
                            Sign In Now
                        </Link>
                    </p>
                </Row>
            </Container>
        </>

        // <div className="container">
        //     <form onSubmit={handleSubmit} className="bg-light">
        //         <h5>Sign Up</h5>
        //         <div>
        //             <label htmlFor="firstName" className="form-label">First Name</label>
        //             <input type="text" className="form-control" id="firstName" {...bindFirstName} />
        //         </div>
        //         <div>
        //             <label htmlFor="lastName" className="form-label">Last Name</label>
        //             <input type="text" className="form-control" id="lastName" {...bindLastName} />
        //         </div>
        //         <div>
        //             <label htmlFor="email" className="form-label">Email</label>
        //             <input type="email" className="form-control" id="email" {...bindEmail} />
        //         </div>
        //         <div>
        //             <label htmlFor="password" className="form-label">Password</label>
        //             <input type="password" className="form-control" id="password" {...bindPassword} />
        //         </div>
        //         <div>
        //             <button type="submit" className="btn btn-primary">Login</button>
        //         </div>
        //         <div className="text-danger">
        //             { authError ? <p>{authError}</p> : null}
        //         </div>
        //     </form>
        // </div>
    )
}

export default SignUp
