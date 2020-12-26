import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Moment from 'moment';
import NavBar from '../layout/NavBar';
import { Redirect } from 'react-router-dom';

import { Card, CardFooter, CardBody,
    CardTitle, CardText, Container } from 'reactstrap';

const NoteDetail = (props) => {
    const id = props.match.params.id
    const auth = useSelector((state) => state.firebase.auth)
    const userId = auth.id
    
    useFirestoreConnect(() => [
        { collection: 'users', doc: `${userId}`, subcollections: [{ collection: 'notes', doc: id}], storeAs: 'noteDetail'}
    ])  
    const noteDetail = useSelector(({ firestore: { data } }) => data.notes && data.notes[id])
    
    const noteMarkup = !isLoaded(noteDetail) ? (
        <div>Loading...</div>
    ) : (
        isEmpty(noteDetail) ? (
            <div>Note is Empty</div>
        ) : (
            <Card className="my-4" style={{ backgroundColor: 'transparent', border: '1px solid #516B78' }}>
                <CardBody className="pt-2">
                    <CardTitle className="text text-center fw-bold" id="TextButton" tag="h5">{noteDetail.title}</CardTitle>

                    <CardText className="text-center">{noteDetail.content}</CardText>
                </CardBody>
                <CardFooter className="text-center" style={{ backgroundColor: '#57CC99', color: '#FCF9F9' }}>
                    {Moment(noteDetail.createdAt.toDate()).calendar()}
                </CardFooter>
            </Card>
        )
    )

    if (!auth.uid) return <Redirect to='/' />
    if (!noteDetail) return <Redirect to='/' />
    
    return (
        <>
            <NavBar />
            <Container style={{ paddingTop: '8rem'}}>
                <h1 className="text fw-bolder text-center pb-4">Your Note Details</h1>
                {noteMarkup}
            </Container>
        </>
    )
}


export default NoteDetail
