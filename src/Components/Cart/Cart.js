import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

const Cart = (props) => {
    const food = props.fd;
    const [cart,setCart] = useContext(MyContext);
    console.log(food);
    const handleDec = props.handleDec;
    const handleInc = props.handleInc;
    return (
        <div style={{ borderRadius: '10px', width: '317px', height: 'auto', padding: '15px 10px', margin: '15px 0px', display: 'flex', backgroundColor: 'rgb(255, 204, 204)' }}>

            <Row style={{display: 'flex'}}>
                <Col><img src={food.picture} alt="" style={{ width: '65px', marginRight: '10px' }} /></Col>
                <Col sm={4} style={{justifyContent: 'right', textAlign: 'right', marginRight: '5px'}}>
                    <p style={{ fontSize: '10px' }}>{food.item}</p>
                    <p style={{ color: 'red' }}>${food.price * food.quantity}</p>
                </Col>
                <Col sm={3} style={{ textAlign: 'right', justifyContent: 'right' }}>
                    <Link onClick={()=>handleDec(food)}>-</Link><span>{food.quantity}</span><Link onClick={()=>handleInc(food)}>+</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;