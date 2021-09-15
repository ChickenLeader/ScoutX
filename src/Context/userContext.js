import React, { createContext } from "react";
import Signin from "../screens/signin";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider >{children}</UserContext.Provider>;
};

export default UserContext;
