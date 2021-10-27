import React, { createContext} from "react";
import useFirebase from "../hooks/useFirebase.js";
export const AuthContext = createContext();
const AuthProvider = (props) => {
  const allContext = useFirebase();

  const data = {
    contexts: allContext
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;