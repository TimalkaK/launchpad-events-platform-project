import { useState, useEffect } from "react";
import { ValidateLogin } from "./validateLogin";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "Please enter a username and password"
  );

  useEffect(() => {
    if (userEmail.length >= 2 && password.length >= 2 && password.length <= 8) {
      setDisableButton(false);
      setValidation("");
    } else {
      setDisableButton(true);

      if (userEmail.length === 0 && password.length === 0) {
        setValidation("Please enter a username and password");
      } else if (userEmail.length < 2) {
        setValidation("Please enter your username");
      } else if (password.length < 1 || password.length > 8) {
        setValidation("Please enter an 8 character password.");
      }
    }
  }, [userEmail, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("User logged in");
    console.log(userEmail);
    console.log(password);
  };

  return (
    <section className="form_container">
      <h2 className="header__title">Log In</h2>
      <form className="login_form" name="form" onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email</label>
        <input
          type="email"
          name="userEmail"
          placeholder="joebloggs@gmail.com"
          id="username"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
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
        <ValidateLogin message={showValidation} />
        <button className="submit_btn" disabled={disableButton}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
