import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const PrivateRoute = ({ children, ...rest }) => {
  const { contexts } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        contexts?.user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;