import { useState, useEffect } from "react";
import { ValidateSignUp } from "./validateSignUp";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "Please enter a username and password"
  );

  /*useEffect(() => {
    if (username.length >= 2 && password.length >= 2 && password.length <= 8) {
      setDisableButton(false);
      setValidation("");
    } else {
      setDisableButton(true);

      if (username.length === 0 && password.length === 0) {
        setValidation("Please enter a username and password");
      } else if (username.length < 2) {
        setValidation("Please enter your username");
      } else if (password.length < 1 || password.length > 8) {
        setValidation("Please enter an 8 character password.");
      }
    }
  }, [username, password]);*/

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("User logged in");
  };

  return (
    <section className="sign_up">
      <h2 className="header__title">Sign Up</h2>
      <form name="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="userType">User Type</label>
        <input
          type="text"
          name="userType"
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <ValidateSignUp message={showValidation} />
        <button disabled={disableButton}>Submit</button>
      </form>
    </section>
  );
};
