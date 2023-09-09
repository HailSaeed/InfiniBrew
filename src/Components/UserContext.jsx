import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [Username, SetUsername] = useState("");

  return (
    <UserContext.Provider value={{ Username, SetUsername }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
