import React from "react";
import { Link } from "react-router";

export const AccessDeniedPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
      <h1>403 - Access Denied</h1>
      <p>You do not have permission to view such page.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};
