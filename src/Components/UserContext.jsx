import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [Username, SetUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");
    return storedUsername || "";
  });

  useEffect(() => {
    localStorage.setItem("username", Username);
  }, [Username]);

  return (
    <UserContext.Provider value={{ Username, SetUsername }}>
      {children}
    </UserContext.Provider>
  );
}
