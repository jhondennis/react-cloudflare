import React from "react";
import { useParams, useLocation } from "react-router";

export const UserFormPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();

  const isCreate = location.pathname.includes("/create");
  const isDelete = location.pathname.includes("/delete");
  const isUpdate = !isCreate && !isDelete; // OR check ID presence

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        {isCreate && "Create User"}
        {isUpdate && `Update User ${id}`}
        {isDelete && `Delete User ${id}`}
      </h1>
      <p>Form content goes here...</p>
    </div>
  );
};
