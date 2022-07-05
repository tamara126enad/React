import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "tamara",
      password: "012345*"
    },
    {
      username: "tama",
      password: "aas012345*"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form App">
      <form onSubmit={handleSubmit}>
        <div className="input-container"><br></br>
          <label>Username </label>
          <input type="text" name="uname" required /><br></br>
          <span>{renderErrorMessage("uname")}</span>
        </div><br></br>
        <div className="input-container"><br></br>
          <label>Password </label>
          <input type="password" name="pass" required /><br></br>
          <span>{renderErrorMessage("pass")}</span>
        </div><br></br>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title App"><h1>SIGN IN</h1></div>
        {isSubmitted ? <div className="App">User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
export default App;
