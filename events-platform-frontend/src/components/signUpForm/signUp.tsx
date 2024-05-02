import { useState, useEffect } from "react";
import { ValidateSignUp } from "./validateSignUp";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "To sign up, make sure to complete all fields."
  );

  useEffect(() => {
    if (
      name.length >= 2 &&
      email.length >= 5 &&
      password.length >= 2 &&
      password.length <= 8
    ) {
      setDisableButton(false);
      setValidation("");
    } else {
      setDisableButton(true);

      if (name.length === 0 && email.length === 0 && password.length === 0) {
        setValidation("To sign up, make sure to complete all fields.");
      } else if (name.length < 2) {
        setValidation("Please enter your name");
      } else if (email.length < 2) {
        setValidation("Please enter your email address");
      } else if (password.length < 1 || password.length > 8) {
        setValidation("Please enter an 8 character password.");
      }
    }
  }, [name, email, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Yay! User has signed up.");
    console.log(name);
    console.log(userType);
    console.log(email);
    console.log(password);
  };

  return (
    <section className="form_container">
      <h2 className="header__title">Sign Up</h2>
      <form className="signup_form" name="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="email"
          name="email"
          placeholder="joebloggs@gmail.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <ValidateSignUp message={showValidation} />
        <button className="submit_btn" disabled={disableButton}>
          Sign Up
        </button>
      </form>
    </section>
  );
};
