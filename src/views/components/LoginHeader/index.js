import React from "react";

const LoginHeader = ({ header, subHeader }) => {
  return (
    <div>
      <h1 style={{ marginBottom: "-10px" }}>{header}</h1>
      <h3>{subHeader}</h3>
    </div>
  );
};

export default LoginHeader;
