import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider() {
    const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      
    </AuthContext.Provider>
  );
}

export {AuthProvider, AuthContext}
