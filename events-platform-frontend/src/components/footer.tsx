import icon from "../assets/cat_icon.png";

// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element
function Footer(): JSX.Element {
  return (
    <footer>
      <section className="nav__container footer">
        <ul className="footer__section ul">
          <li>
            <a className="links" href="https://www.cats.org.uk/sponsor">
              About
            </a>
          </li>
          <li>
            <a className="links" href="contact">
              Contact
            </a>
          </li>
          <li>
            <a className="links" href="help">
              Help
            </a>
          </li>
          <li className="links">&copy; 2021 TR Inc.</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
