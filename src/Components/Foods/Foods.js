import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Foods = (props) => {
    console.log(props);
    const { price, picture, item, id } = props.foods;
    return (
        <Col sm={4}>

            <Card style={{ width: '18rem', marginTop: '40px', boxShadow: '5px 10px lightGray', border: 'none', borderRadius: '10px' }}>
                <Link to={"/food/"+id}><Card.Img variant="top" style={{ width: '70%', margin: '0 auto' }} src={picture} /></Link>
                <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>
                        How we dream about our future
                    </Card.Text>
                    <h3>${price}</h3>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Foods;