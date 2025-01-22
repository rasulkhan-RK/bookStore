/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function Authprovider({ children }) {
  const initialAuthor = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialAuthor ? JSON.parse(initialAuthor) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
