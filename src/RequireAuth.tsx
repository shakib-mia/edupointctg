import React, { ReactNode, useContext } from "react";
import { AppContext } from "./App";
import { Navigate } from "react-router-dom";

interface propType {
  children: ReactNode;
}

const RequireAuth = ({ children }: propType) => {
  const { store } = useContext(AppContext);

  if (!store.token) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
