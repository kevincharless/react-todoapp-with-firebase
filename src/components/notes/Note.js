import React from 'react'
import Moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteNote, toggleFavorite } from '../../redux/action/noteAction';
import { Link } from 'react-router-dom';

import { Button, Card, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const Note = ({ note }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteNote(note))
    }
    
    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(note))
    }

    const handleEditNote = () => {
        dispatch({ type: "EDIT_NOTE", payload: note })
    }

    const favoriteMarkup =  note.favorite ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#57CC99" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
    ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#57CC99" className="bi bi-heart" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>)

    return (
        <>
            <Card className="my-4" style={{ backgroundColor: 'transparent', border: '1px solid #516B78' }}>
                <div className="d-flex justify-content-between mt-2 mx-2">
                    <Link to={`/editform/${note.id}`}>
                        <Button onClick={handleEditNote} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#57CC99" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Button>
                    </Link>
                    <div className="d-flex flex-row-reverse">
                        <Button onClick={handleToggleFavorite} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            {favoriteMarkup}
                        </Button>
                        <Button className="pe-0" onClick={handleDelete} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#57CC99" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </Button>
                    </div>
                </div>
                <CardBody className="pt-2">
                    <Link to={`/note/${note.id}`}>
                        <CardTitle className="text text-center fw-bold text-truncate" id="TextButton" tag="h5">{note.title}</CardTitle>
                    </Link>

                    <CardText className="text-center text-truncate">{note.content}</CardText>
                </CardBody>
                <CardFooter className="text-center" style={{ backgroundColor: '#57CC99', color: '#FCF9F9' }}>
                    {Moment(note.createdAt.toDate()).fromNow()}
                </CardFooter>
            </Card>
        </>

        // <div className="card text-center mb-3">
            // <div className="d-flex justify-content-between mt-2 mx-2">
            //     <Link to={`/editform/${note.id}`}>
            //         <button className="btn" onClick={handleEditNote}>
            //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            //                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            //                 <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            //             </svg>
            //         </button>
            //     </Link>
            //     <div className="d-flex flex-row-reverse">
            //         <button className="btn" onClick={handleToggleFavorite}>
            //             {favoriteMarkup}
            //         </button>
            //         <button className="btn pe-0" onClick={handleDelete}>
            //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            //                 <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
            //             </svg>
            //         </button>
            //     </div>
            // </div>
        //     <div className="card-body pt-0">
        //         <Link to={`/note/${note.id}`}>
        //             <h4 className="card-title text-truncate">{note.title}</h4>
        //         </Link>
        //         <p className="card-text text-truncate">{note.content}</p>
        //     </div>
        //     <div className="card-footer text-muted">
        //         {Moment(note.createdAt.toDate()).fromNow()}
        //     </div>
        // </div>
    )
}

export default Note
