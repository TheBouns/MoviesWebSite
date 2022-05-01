import React from "react";
import "./registerComponent.css";

export const RegisterComponent = () => {
  return (
    <div id="initial-container">
      <form className="login-form">
        <h2>Register</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" className=" form-button" />
      </form>
    </div>
  );
};
