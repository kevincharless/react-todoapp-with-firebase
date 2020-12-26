import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import NavBar from '../layout/NavBar';
import NoteList from './NoteList';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

const Favorites = () => {
    const auth = useSelector((state) => state.firebase.auth)
    const userId = auth.uid

    useFirestoreConnect(() => [
        { collection: 'users', doc: `${userId}`, subcollections: [{ collection: 'notes', where: ['favorite', '==', true], orderBy: ['createdAt', 'desc'] }], storeAs: 'favoriteNotes'}
    ])

    const favoriteNotes = useSelector((state) => state.firestore.ordered.favoriteNotes)

    if (!auth.uid) return <Redirect to='/' />

    const favoriteNotesMarkup = !isLoaded(favoriteNotes) ? (
        <div>Loading...</div>
    ) : (
        isEmpty(favoriteNotes) ? (
            <div>note is Empty</div>
        ) : (
            <NoteList notes={favoriteNotes} />
        )
    )

    return (
        <>
            <NavBar />
            <Container style={{ paddingTop: '8rem'}}>
                <h1 className="text fw-bolder text-center pb-4">Your Favorite Notes</h1>
                {favoriteNotesMarkup}
            </Container>
        </>
    )
}

export default Favorites
