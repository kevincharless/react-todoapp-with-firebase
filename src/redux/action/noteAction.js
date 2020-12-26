export const addNote = (note) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userUid = getState().firebase.auth.uid;
        firestore.collection('users').doc(userUid).collection('notes')
        .add({
            ...note,
            userFirstName: profile.firstName,
            userLastName: profile.lastName,
            userUid,
            favorite: false,
            createdAt: new Date()
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const id = note.id
        const userUid = getState().firebase.auth.uid;
        firestore.collection('users').doc(userUid).collection('notes').doc(id).delete()
        .catch(err => {
            console.log(err)
        })
    }
}

export const toggleFavorite = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const favoriteStatus = !note.favorite
        const firestore = getFirestore()
        const id = note.id
        const userUid = getState().firebase.auth.uid;
        firestore.collection('users').doc(userUid).collection('notes').doc(id).update({
            favorite: favoriteStatus
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const updateNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const id = note.id
        const userUid = getState().firebase.auth.uid;
        firestore.collection('users').doc(userUid).collection('notes').doc(id).update({
            title: note.title,
            content: note.content
        })
        .catch(err => {
            console.log(err)
        })
    }
}