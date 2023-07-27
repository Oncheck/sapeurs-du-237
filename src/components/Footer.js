import { useState } from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	

	return (
		<footer className='footer'>
			<div className='footer-top'>
				<div className='footer-about'>
					<img src={logo}/>
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
				<div className='footer-about'></div>
				<div className='footer-about'></div>
				<div className='footer-about'></div>
			</div>
			
			<div className='footer-bottom'>
				<p>&copy; 2023 Sapeurs du 237 | All Rights Reserved</p>
				<p>Designed by <Link>OnCheck</Link></p>
			</div>
		</footer>
	)
}

export default Footer