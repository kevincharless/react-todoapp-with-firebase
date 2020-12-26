import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const contentCard = (props) => {
    return (
        <div>
            <Card className="pb-4" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <div className="d-flex justify-content-cente rounded-circle mx-auto d-block p-3" style={{ border: '3px solid #57CC99', width: '7rem', height: '7rem' }}>
                <CardImg className="mx-auto d-block" src={props.cardImage} alt="Card image" style={{ width: '4.5rem', height: '4.5rem' }} />
                </div>
                <CardBody>
                    <CardTitle className="text-center py-2" tag="h3">{props.cardTitle}</CardTitle>
                    <CardText className="text text-center fs-5" style={{ color: '#516B78' }}>
                        {props.cardContent}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default contentCard
