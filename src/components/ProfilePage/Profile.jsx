import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Profile() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const selectedUser = users.find((user) => user.id == id);
  console.log(users, selectedUser);
  return selectedUser !== undefined ? (
    <div>
      <h1>{selectedUser.name}</h1>
      <h2>@{selectedUser.username}</h2>
      <h3>{selectedUser.email}</h3>
      <h3>{selectedUser.phone}</h3>
      <h4>
        <a
          href={`http://${selectedUser.website}`}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      </h4>
      <div>
        <h2>Address</h2>
        <h3>City {selectedUser.address.city}</h3>
        <h4>Zipcode {selectedUser.address.zipcode}</h4>
      </div>
    </div>
  ) : (
    <div>User Not Found</div>
  );
}
