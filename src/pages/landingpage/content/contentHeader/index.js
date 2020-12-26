import React from 'react'
import {
    Row
} from 'reactstrap';

const contentHeader = (props) => {
    return (
        <div className="text-center py-5">
            <Row className="pt-5">
                <h1 className="text fw-bolder">{props.title}</h1>
            </Row>
            <Row className="d-flex justify-content-center py-4">
                <div className="rectangle"></div>
            </Row>
            <Row className="d-flex justify-content-center">
                <p className="text fs-5" style={{ color: '#516B78', width: "60%" }}>
                    {props.content}
                </p>
            </Row>
        </div>
    )
}

export default contentHeader
