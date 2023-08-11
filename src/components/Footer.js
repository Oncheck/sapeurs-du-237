import '../styles/Footer.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {

	

	return (
		<footer className='footer'>
			<div className='footer-top'>
				<div className='footer-about'>
					<img src={logo} alt='logo'/>
					<p>Loremhohrohgreuhurhuorzhuirrgtrey tryrgrerfgjnrmhrohedifsdf efheuzhfu efefd</p>
					<div className='footer-social'>
						<div className='footer-social-icon'>
							<i className='fa fa-instagram'></i>
						</div>
						<div className='footer-social-icon'>
							<i className='fa fa-facebook'></i>
						</div>
						<div className='footer-social-icon'>
							<i className='fa fa-whatsapp'></i>
						</div>
					</div>
				</div>
				<div className='footer-about'>
					<h4>Company</h4>
					<ul>
						<li><Link to='/'>A Propos</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/'>Comment ça marche ?</Link></li>
					</ul>
				</div>
				<div className='footer-about'>
					<h4>Company</h4>
					<ul>
						<li><Link to='/'>FAQ</Link></li>
						<li><Link to='/contact'>Privacy</Link></li>
						<li><Link to='/products'>Shop</Link></li>
					</ul>
				</div>
				<div className='footer-about'>
					<h4>Get in touch</h4>
					<ul>
						<li><Link to='mailto:sapeurdu237@yahoo.com'>sapeurdu237@yahoo.com</Link></li>
						<li><Link to='tel:+4912354512367'>+49 1235 4512367</Link></li>
					</ul>
				</div>
			</div>
			<hr />
			
			<div className='footer-bottom'>
				<p>&copy; 2023 Sapeurs du 237 | All Rights Reserved</p>
				<p>Designed by <Link to='https://www.oncheck.com'>OnCheck</Link></p>
			</div>
		</footer>
	)
}

export default Footer