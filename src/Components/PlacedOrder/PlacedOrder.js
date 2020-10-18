import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import map from '../../map.jpg';
import honda from '../../Group 1151.png';
import { useContext } from 'react';
import { MyContext } from '../../App';
const PlacedOrder = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(MyContext);
    return (
        <Container>
            <Row style={{ margin: '100px auto' }}>
                <Col sm={9}>
                    <img style={{ width: "80%", borderRadius: '3px' }} src={map} alt="" />
                </Col>
                <Col sm={3} style={{ border: '1px solid red', borderRadius: '10px', padding: '10px 10px' }}>
                    <img style={{ width: '30%' }} src={honda} alt="" />
                    <div style={{ background: 'silver', marginTop: '10px', padding: '6px 2px' }}>
                        <h5>Your location</h5>
                        <p>lorem ipsum</p>
                    </div>
                    <h2>9.30</h2>
                    <p>estimated delivery time</p>
                    <div style={{ background: 'yellow', margin: '15px 0px', padding: '5px 2px' }}>
                        <h4 style={{ color: 'red' }}>{loggedInUser.displayName}</h4>
                        <p style={{ fontSize: '10px', color: 'silver' }}>customer name</p>
                    </div>
                    <Button variant="danger" size="lg" block>
                        Contact
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PlacedOrder;