// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element
function Navbar(): JSX.Element {
	return (
		<nav className="nav__container">
			<ul className="nav__container ul ul__navbar">
				<li><a className="links" href="home">Home</a></li>
				<li><a className="links" href="mews">Mews</a></li>
				<li><a className="links" href="contact">Contact</a></li>
				<li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;