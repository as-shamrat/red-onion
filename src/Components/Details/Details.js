import React from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import foodData from '../../Data/Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Detail.css';
import { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Details = () => {
    const [cart, setCart] = useContext(MyContext);
    const [quantity, setQuantity] = useState(1);
    const { foodId } = useParams();
    console.log(foodId);
    let viewedFood = foodData.find(fd => fd.id === Number(foodId));
    console.log(viewedFood);
    const { description, item, picture, price, category } = viewedFood;
    const handleInc = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    };
    const handleDec = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    };
    const handleCart = (id) => {
        const addedFood = foodData.find(fd => fd.id === Number(id));
        addedFood.quantity = quantity;
        const newCart = [...cart, addedFood];
        setCart(newCart);
        addToDatabaseCart(id, addedFood.quantity);
    };
    console.log(cart);
    return (
        <Container>
            <Row>
                <Col sm={6} className="my-auto text-left">
                    <h1>{item}</h1>
                    <p style={{ textAlign: 'justify' }}>{description}</p>

                    <h2 style={{ textAlign: 'left', display: '', marginRight: '10px' }}>${price * quantity}</h2>

                    <div className="box">
                        <button className="btn" onClick={handleDec}>-</button>
                        <span style={{ marginTop: '10px' }}>{quantity}</span>
                        <button className="btn" onClick={handleInc}>+</button>
                    </div>


                    <Button style={{ borderRadius: '25px', padding: '9px 35px', marginTop: '15px', fontSize: '12px', }} variant="danger" onClick={() => handleCart(foodId)}><FontAwesomeIcon icon={faShoppingCart} /> Add</Button>

                </Col>
                <Col sm={6}>
                    <img src={picture} style={{ width: '70%' }} alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Details;