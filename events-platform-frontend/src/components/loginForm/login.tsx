import { useState, useEffect } from "react";
import { ValidateLogin } from "./validateLogin";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "Please enter a username and password"
  );

  useEffect(() => {
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
  }, [username, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("User logged in");
  };

  return (
    <section className="loginForm">
      <p>Login</p>

      <form name="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <ValidateLogin message={showValidation} />
        <button disabled={disableButton}>Submit</button>
      </form>
    </section>
  );
};

export default Login;
