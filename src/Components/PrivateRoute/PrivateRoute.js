import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { MyContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(MyContext);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;