import React from 'react';
import NavBar from '../layout/NavBar';
import useInput from '../../customhook/useInput';
import { updateNote } from '../../redux/action/noteAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import {
    Button, Container, Form, FormGroup, Input, Label
} from 'reactstrap';

const EditForm = () => {
    const note = useSelector((state) => state.note)

    const dispatch = useDispatch()
    const history = useHistory()

    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateNote({ id: note.id, title, content }))
        resetTitle();
        resetContent();
        history.push('/dashboard')
    }

    const auth = useSelector((state) => state.firebase.auth)

    if (!auth.uid) return <Redirect to='/' />

    return (
        <>
            <NavBar />
            <Container className="w-75" style={{ paddingTop: '8rem'}}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="py-2">
                        <h1 className="text fw-bolder text-center pb-4">Edit Your Note</h1>
                        <Label className="text fs-5 fw-bold" for="noteTitle" style={{ color: '#263238' }}>Note Title : </Label>
                        <Input type="text" name="noteTitle" placeholder="Add your note title..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindTitle} />
                    </FormGroup>

                    <FormGroup className="pb-2">
                        <Label className="text fs-5 fw-bold" for="noteContent" style={{ color: '#263238' }}>Note Content : </Label>
                        <Input type="textarea" name="noteContent" placeholder="Add your note content..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindContent} />
                    </FormGroup>

                    <div className="d-flex justify-content-end">
                        <Button className="fs-5 px-4" style={{ backgroundColor: '#57CC99', border: 'none', color: '#FCF9F9' }}>
                            Edit Note
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
        // <div className="container">
        //     <form onSubmit={handleSubmit}>
        //         <div className="my-3">
        //             <label className="form-label">Edit Note Title</label>
        //             <input type="text" className="form-control" {...bindTitle} />
        //         </div>
        //         <div className="mb-3">
        //             <label className="form-label">Edit Note Content</label>
        //             <textarea className="form-control" {...bindContent}></textarea>
        //         </div>
        //         <div className="d-flex align-items-end flex-column">
        //             <button className="btn btn-success d-flex align-items-end">Update Note</button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default EditForm
