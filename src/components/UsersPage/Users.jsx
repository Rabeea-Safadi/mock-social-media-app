import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./Users.module.css";
import LoadingWindow from "../LoadingWindow/LoadingWindow";

export default function Users() {
  const userCtx = useContext(UserContext);

  return userCtx.users.length > 0 ? (
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
  ) : (
    <LoadingWindow />
  );
}
