import React from "react";
import Avatar from "react-avatar";
const Client = ({ username }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
      }}
    >
      <Avatar name={username} size={50} round="25px" />
      <span style={{ marginTop: "10px", color: "white" }}>{username}</span>
    </div>
  );
};

export default Client;
