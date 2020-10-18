import React from 'react';
import { useState } from 'react';
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap';
import './Preview.css';
import data from '../../Data/Data.json';
import { useEffect } from 'react';
import Foods from '../Foods/Foods';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
const Preview = () => {
    const [cart, setCart] = useContext(MyContext);
    const [food, setFood] = useState([]);
    const handleFood = (cat) => {
        const filterd = data.filter(fd => fd.category === cat);
        setFood(filterd);
    };
    // console.log(food);
    return (
        <Container className="preview">
            <Link  className="mx-4 text-dark font-weight-bolder" onClick={() => handleFood('LUNCH')}>Lunch</Link>
            <Link  className="mx-4 text-dark font-weight-bolder" onClick={() => handleFood('BREAKFAST')}>Breakfast</Link>
            <Link  className="mx-4 text-dark font-weight-bolder" onClick={() => handleFood('DINNER')}>Dinner</Link>
            {/* <Button variant="danger" className="mx-4" onClick={() => handleFood('LUNCH')}>lunch</Button>
            <Button variant="danger" className="mx-4" onClick={() => handleFood('BREAKFAST')}>breakfast</Button>
            <Button variant="danger" className="mx-4" onClick={() => handleFood('DINNER')}>dinner</Button> */}
            <Row>
                {
                    food.map(fd => <Foods foods={fd}></Foods>)
                }
            </Row>
           <div style={{margin: '25px 10px'}}>
               {
                   cart.length > 0? <Link to="/shipment"><Button variant="danger">Checkout Your Food</Button></Link>:
                   <Button variant="danger" disabled>Checkout Your Food</Button>
               }
           
           </div>
            {/* <Button variant="danger">Checkout Your Food</Button> */}
           
        </Container>
    );
};

export default Preview;