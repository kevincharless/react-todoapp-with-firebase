import React from 'react';
import Form from '../../components/notes/InputForm'
import NavBar from '../../components/layout/NavBar';
import NoteList from '../../components/notes/NoteList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link, Redirect } from 'react-router-dom';

import {
    Button, Col, Container, Row
} from 'reactstrap';

const Home = ()  => {
    const auth = useSelector((state) => state.firebase.auth)
    const userId = auth.uid
    
    useFirestoreConnect([ {
        collection: 'users',
        doc: `${userId}`,
        subcollections: [{ collection: 'notes', orderBy: ['createdAt', 'desc'] }],
        storeAs: 'notes'
    } ])

    const notes = useSelector((state) => state.firestore.ordered.notes)

    if (!auth.uid) return <Redirect to='/' />

    const notesMarkup = !isLoaded(notes) ? (
        <div>Loading...</div>
    ) : (
        (
            <>
                <NavBar />
                <Container style={{ paddingTop: '8rem'}}>
                    <Row>
                        <Col sm="7">
                            <Form />
                        </Col>
                        <Col sm="5" style={{ paddingTop: '5.5rem'}}>
                            <p className="text fs-5 fw-bold align-middle mb-0" style={{ color: '#263238' }}>
                                Your Note :
                            </p>
                            <div className="d-flex justify-content-end">
                                <Link to="/favorite">
                                    <Button className="fs-5 px-4" style={{ backgroundColor: '#57CC99', border: 'none', color: '#FCF9F9' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FCF9F9" className="bi bi-heart-fill mr-2" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg>
                                        Favorite
                                    </Button>
                                </Link>
                            </div>
                            <NoteList notes={notes} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    )

    return (
        <>
            {notesMarkup}
        </>
    )
}

export default Home
