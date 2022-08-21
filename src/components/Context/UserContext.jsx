import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();

      // Faking an api call taking 3 seconds
      setTimeout(() => {
        setPosts(posts);
      }, 3000);
    };

    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      // Faking an api call taking 3 seconds
      setTimeout(() => setUsers(users), 3000);
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <UserContext.Provider value={{ users, posts, setUsers, setPosts }}>
      {children}
    </UserContext.Provider>
  );
}
