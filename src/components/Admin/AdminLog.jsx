import React from "react";
import "./AdminLog.css";
import { useState, renderForm, useEffect } from "react";
import Admin from "./Admin";
const AdminLog = () => {
  const [compIsShown, setCompIsShown] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // Användare Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className=" admin_log d-flex justify-content-center">
     
      <form onSubmit={handleSubmit}>
        <legend className="succes_message">Sign in</legend>
        <hr></hr>
        <div className="input-container">
          <label  className="succes_message">Username: </label>
          <input className="usernameInput" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label  className="succes_message">Password:</label>
          <input
            className="passwordInput"
            type={passwordShown ? "text" : "password"}
            name="pass"
            required
          />
            {renderErrorMessage("pass")}

          <div className="m-4">
            <button
              className="btn btn-primary"
              onClick={() => setCompIsShown(true)}
              type="submit"
            >
              Sign in
            </button>
          </div>
        </div>

        <hr></hr>

        {isSubmitted ? (
          <div className="succes_message">User is successfully logged in {compIsShown && <Admin />} </div>
        ) : (
          renderForm
        )}
      </form>
    </div>
  );
};

export default AdminLog;
