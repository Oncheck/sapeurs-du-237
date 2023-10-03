import '../styles/Footer.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
	
	return (
		<footer className='footer'>
			<div className='footer-top'>
				<div className='footer-about'>
					<img src={logo} alt='logo'/>
					<p>
						La Sapologie à bas coûts.<br />
						Différents concepts Hommes, Femmes, Mariages.
						Sapeurs du 237 c'est aussi l'évènementiel: Photos, Services traiteurs, Création de cartes
						digitales, Web-Design à bas coûts !
					</p>
					<div className='footer-social'>
						<div className='footer-social-icon'>
							<Link to={'https://instagram.com'} target='_blank' style={{ color: '#c13584'}}>
								<i className='fa fa-instagram'></i>
							</Link>
						</div>
						<div className='footer-social-icon'>
							<Link to={'https://facebook.com'} target='_blank' style={{ color: '#3b5998'}}>
								<i className='fa fa-facebook'></i>
							</Link>
						</div>
						<div className='footer-social-icon'>
							<Link to={'https://wa.me/491795273527'} target='_blank' style={{ color: 'green'}}>
								<i className='fa fa-whatsapp'></i>
							</Link>
						</div>
					</div>
				</div>

				<div className='footer-about'>
					<h4>Company</h4>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/products'>Shop</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/espace-mariage'>Espace Mariage</Link></li>
					</ul>
				</div>
				
				<div className='footer-about'>
					<h4>Get in touch</h4>
					<ul>
						<li><Link to='mailto:sapeur237@yahoo.com'>sapeur237@yahoo.com</Link></li>
						<li><Link to='tel:+491795273527'>+49 1795 273527</Link></li>
					</ul>
				</div>
			</div>
			<hr />
			
			<div className='footer-bottom'>
				<p>&copy; 2023 Sapeurs du 237 | All Rights Reserved</p>
				<p>Designed by <Link to='https://services-oncheck.com/index.php'>OnCheck</Link></p>
			</div>
		</footer>
	)
}

export default Footer