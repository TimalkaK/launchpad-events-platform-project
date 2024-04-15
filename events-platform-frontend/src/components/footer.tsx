import icon from '../assets/cat_icon.png';

// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element
function Footer(): JSX.Element {
	return (
		<footer>
			<section className='nav__container footer'>
				<ul className='footer__section ul'>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							About
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Belly Rubs
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Donate
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Cat Nip
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Customers
						</a>
					</li>
				</ul>
				<ul className='footer__section ul'>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Resources
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Dogs
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Blog
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							eBooks
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Revenge
						</a>
					</li>
				</ul>
				<ul className='footer__section ul'>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Contact
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Help
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Meow
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Mice
						</a>
					</li>
				</ul>
				<ul className='footer__section ul'>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Ts &amp; Cs
						</a>
					</li>
					<li>
						<a
							className='links'
							href='https://www.cats.org.uk/sponsor'>
							Privacy Policy
						</a>
					</li>
					<li className='links'>&copy; 2021 TR Inc.</li>
					<i>
						<img
							className='icon'
							src={icon}
							alt='A ginger cat silhouette'
						/>
					</i>
				</ul>
			</section>
		</footer>
	);
}

export default Footer;
