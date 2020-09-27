import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
    const username = useSelector((state) => state.username);
    return (
        <Route
            {...rest}
            render={props =>
                username ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/login"}}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute;