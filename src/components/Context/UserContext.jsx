import React, { useState } from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <UserContext.Provider value={{ users, posts, setUsers, setPosts }}>
      {children}
    </UserContext.Provider>
  );
}
