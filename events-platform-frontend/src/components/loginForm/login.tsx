import { useState, useEffect } from "react";
import { ValidateLogin } from "./validateLogin";
import { LoginResponse } from "./loginResponse";
import { useContext } from "react";
import { enableAddEventsContext, EnableAddEventsContextType } from "../../App";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("non-staff");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "Please enter a username and password"
  );
  const [showResponse, setShowResponse] = useState("");
  //const [staff, setStaff] = useState(false);

  const addEventsContext = useContext(enableAddEventsContext);
  const [enableAddEvents, setEnableAddEvents] =
    useState<EnableAddEventsContextType>(addEventsContext);

  console.log(enableAddEvents);

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
    console.log(userType);
    console.log(password);

    if (userType === "staff") {
      setEnableAddEvents((prevState) => ({
        ...prevState,
        enableAddEvents: true,
      }));
      console.log(enableAddEvents);
    } else if (userType === "non-staff") {
      setEnableAddEvents((prevState) => ({
        ...prevState,
        enableAddEvents: false,
      }));
      console.log(enableAddEvents);
    }

    setShowResponse("");
    setUserEmail("");
    setPassword("");
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
        <label htmlFor="userType">User Type</label>
        <select
          id="userType"
          name="userType"
          value={userType}
          onChange={(e) => {
            const value = e.target.value;
            setUserType(value);
          }}
        >
          <option value="staff">Staff</option>
          <option value="non-staff">Non-staff</option>
        </select>
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

      <LoginResponse message={showResponse} />
    </section>
  );
};

export default Login;
