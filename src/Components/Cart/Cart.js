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
        <div style={{ borderRadius: '10px', width: '317px', height: '90px', padding: '10px 5px', margin: '15px 5px', display: 'flex', backgroundColor: 'rgb(255, 204, 204)' }}>

            <Row style={{display: 'flex'}}>
                <Col sm={4}><img src={food.picture} alt="" style={{ width: '65px', marginRight: '10px' }} /></Col>
                <Col sm={3} style={{justifyContent: 'right', textAlign: 'right', marginRight: '5px'}}>
                    <p style={{ fontSize: '10px', fontWeight: 'bolder' }}>{food.item}</p>
                    <p style={{ color: 'red' }}>${food.price * food.quantity}</p>
                </Col>
                <Col sm={3} className="my-auto" style={{ textAlign: 'right', justifyContent: 'right' }}>
                    <Link onClick={()=>handleDec(food)} style={{marginRight: '5px'}}>-</Link><span className="mx-1" style={{border: 'none', fontSize: '12px', borderRadius: '3px', padding: '2px 2px', backgroundColor: 'white', fontWeight: 'bolder', fontSize: '15px', fontWeight: 'bolder'}}>{food.quantity}</span><Link onClick={()=>handleInc(food)}  style={{marginLeft: '5px',fontSize: '12px',  fontWeight: 'bolder'}}>+</Link>

                </Col>
            </Row>
        </div>
    );
};

export default Cart;