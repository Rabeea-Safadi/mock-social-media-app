import { useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./Users.module.css";

export default function Users() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      userCtx.setUsers(users);
    };

    fetchData();
  }, []);

  return (
    userCtx.users.length > 0 && (
      <table className={styles["users-table"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userCtx.users.map((item) => {
            return (
              <tr className={styles["user-row"]} key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
