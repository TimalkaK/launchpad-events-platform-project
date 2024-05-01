import { Link } from "react-router-dom";

// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element

function Navbar(): JSX.Element {
  return (
    <nav className="nav__container">
      <ul className="nav__container ul ul__navbar">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/addEvents">
            Add Events
          </Link>
        </li>
        <li>
          <Link className="links" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="links" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
