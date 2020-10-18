import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo2.png';
const firebaseConfig = {
    apiKey: "AIzaSyBXmRUv0o1Lu4486wShmPTfWzBXE0WKUd8",
    authDomain: "burj-al-arab-64cca.firebaseapp.com",
    databaseURL: "https://burj-al-arab-64cca.firebaseio.com",
    projectId: "burj-al-arab-64cca",
    storageBucket: "burj-al-arab-64cca.appspot.com",
    messagingSenderId: "311277083587",
    appId: "1:311277083587:web:acbe1a73b7afe9da323b76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        error: ''
    });
    const [newUser, setNewUser] = useState(true);
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    console.log(loggedInUser);
                    // console.log(user);
                    updateUserName(user.name)
                    history.replace(from);
                    // console.log(res.user);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);

                    // ...
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    newUserInfo.displayName = res.user['displayName'];
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(res);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    // ...
                });
        }

        e.preventDefault();

    };
    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormValid = true;
        let secondPassword;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const hasDigit = /\d{1}/.test(e.target.value);
            const isLength = e.target.value.length > 6;
            isFormValid = hasDigit && isLength;
        }

        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            // console.log(user[e.target.name]);
            setUser(newUser);
        }
    };
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('updated successfully');
        }).
            catch(function (error) {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <Container className="login">
            <br />
            <Form className="form my-auto mx-auto" onSubmit={handleSubmit}>
                <img src={logo} alt="" />
                <Form.Group controlId="formBasicEmail">
                    {
                        newUser &&
                        <Form.Control size="sm" type="text" placeholder="Enter name" name="name" onBlur={handleBlur} />
                    }

                    <br />

                    <Form.Control size="sm" type="email" placeholder="Enter email" name="email" onBlur={handleBlur} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                    <Form.Control type="password" size="sm" placeholder="Password" name="password" onBlur={handleBlur} />
                </Form.Group>
                {/* {
                    newUser &&
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" size="sm" placeholder="re-enter Password" name="rePassword" />
                    </Form.Group>
                } */}
                <Button variant="danger" type="submit">
                    Submit
  </Button>
                <br />
                <br />

                <Form.Text className="text-danger" style={{cursor: 'context-menu'}} onClick={() => setNewUser(!newUser)}>
                    {newUser?'allready have an accout?':'create a new account'}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;