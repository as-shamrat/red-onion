import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import img1 from '../../1.png';
import img2 from '../../2.png';
import img3 from '../../3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faBell, faCar, faCarSide, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Speciality = () => {
    return (
        <Container style={{marginTop: '30px'}}>
            <h2 className="text-left">Why you choose us</h2>
            <p className="text-left">This is a wider card with supporting text below as a natural lead-in toadditional content.
             </p>
            <CardDeck>
                <Card style={{border: 'none', borderRadius: '15px'}}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faCarSide}/> Fast Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                        </Card.Text>
                        <Card.Link href="#">see more <FontAwesomeIcon icon={faArrowCircleRight} /></Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{border: 'none', borderRadius: '15px'}}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title> <FontAwesomeIcon icon={faBell}/> A Good Auto Responder</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
        content.{' '}
                        </Card.Text>
                        <Card.Link href="#">see more <FontAwesomeIcon icon={faArrowCircleRight} /></Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{border: 'none', borderRadius: '15px'}}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faCar}/>  Home Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            t action.
                        </Card.Text>
                        <Card.Link href="#">see more <FontAwesomeIcon icon={faArrowCircleRight} /></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>

        </Container>
    );
};

export default Speciality;