import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute({ component: Component, ...rest }) {
    const username = useSelector((state) => state.username);
    return (
        <Route
            {...rest}
            render={props =>
                username ? (
                    <Redirect
                        to={{ pathname: "/" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
}
export default PublicRoute;