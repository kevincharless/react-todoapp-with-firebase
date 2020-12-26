import React from 'react';
import useInput from '../../customhook/useInput';
import { addNote } from '../../redux/action/noteAction';
import { useDispatch } from 'react-redux';

import {
    Button, Form, FormGroup, Input, Label
} from 'reactstrap';

const InputForm = () => {
    const [title, bindTitle, resetTitle] = useInput()
    const [content, bindContent, resetContent] = useInput()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addNote({title, content}))
        resetTitle();
        resetContent();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="py-2">
                <h1 className="text fw-bolder text-center pb-4">Add Your Note</h1>
                <Label className="text fs-5 fw-bold" for="noteTitle" style={{ color: '#263238' }}>Note Title : </Label>
                <Input type="text" name="noteTitle" placeholder="Add your note title..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindTitle} />
            </FormGroup>

            <FormGroup className="pb-2">
                <Label className="text fs-5 fw-bold" for="noteContent" style={{ color: '#263238' }}>Note Content : </Label>
                <Input type="textarea" name="noteContent" placeholder="Add your note content..." style={{ background: 'transparent', border: '1px solid #516B78', color: '#516B78' }} {...bindContent} />
            </FormGroup>

            <div className="d-flex justify-content-end">
                <Button className="fs-5 px-4" style={{ backgroundColor: '#57CC99', border: 'none', color: '#FCF9F9' }}>
                    Add Note
                </Button>
            </div>
        </Form>

        // <form onSubmit={handleSubmit}>
        //     <div className="my-3">
        //         <label className="form-label">Note Title</label>
        //         <input type="text" className="form-control" {...bindTitle} />
        //     </div>
        //     <div className="mb-3">
        //         <label className="form-label">Note Content</label>
        //         <textarea className="form-control" {...bindContent}></textarea>
        //     </div>
        //     <div className="d-flex align-items-end flex-column">
        //         <button className="btn btn-success d-flex align-items-end">Add Note</button>
        //     </div>
        // </form>
    )
}

export default InputForm
