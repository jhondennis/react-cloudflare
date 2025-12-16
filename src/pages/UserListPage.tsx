import React from "react";
import { Link } from "react-router";
import { ROUTES } from "../constants/routes";

export const UserListPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User List</h1>
      <ul>
        <li>
          User 1 - <Link to="/user/update/1">Edit</Link>
        </li>
        <li>
          User 2 - <Link to="/user/update/2">Edit</Link>
        </li>
      </ul>
      <Link to={ROUTES.USER.CREATE}>Create New User</Link>
    </div>
  );
};
