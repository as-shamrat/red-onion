import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { MyContext } from '../../App';
import Cart from '../Cart/Cart';

const Shipment = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(MyContext);
    const handleDec = pd => {
        const decFood = cart.find(fd => fd.id === pd.id);
        if (decFood.quantity > 1) {
            decFood.quantity = decFood.quantity - 1;
        }

        const withOutDecFood = cart.filter(fd => fd.id !== pd.id);
        const allfood = [...withOutDecFood, decFood];
        setCart(allfood);
    };
    const handleInc = pd => {
        const decFood = cart.find(fd => fd.id === pd.id);
        decFood.quantity = decFood.quantity + 1;
        const withOutDecFood = cart.filter(fd => fd.id !== pd.id);
        const allfood = [...withOutDecFood, decFood];
        setCart(allfood);
    }
    let history = useHistory();
    const placeOrder = () => {
        history.push('/placeorder');
    };
    return (
        <Container>
            <h1>{loggedInUser.displayName}</h1>
            <Row>
                <Col sm={8} style={{ padding: '100px 100px' }}>
                    <h3>Edit Delivery Details</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="flat or suit no" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Business name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Add delivery instructor" />
                        </Form.Group>
                        <Button variant="danger" type="submit" size="lg" block>
                            save & continue
  </Button>
                    </Form>
                </Col>
                <Col sm={4} style={{ padding: '100px 30px', justifyContent: 'left', textAlign: 'left' }}>
                    <p>from<span style={{ fontWeight: 'bolder', fontSize: '10px' }}>GULSHAN PLAZA RESTAURA GPR</span> </p>
                    <p>Arriving in 20-30 minutes</p>
                    {cart.map(fd => <Cart fd={fd} handleDec={handleDec} handleInc={handleInc}></Cart>)}
                    <Button variant="danger" size="lg" block onClick={placeOrder}>
                        place order
  </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Shipment;