import '../styles/Banner.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Banner() {

	function displayMenu() {
		const banner = document.getElementsByClassName('banner')
		banner.classList.add('display-menu')
		console.log('Click Btn Menu')
	}

	return (
		<div className='banner'>
			<div className='banner-img'>
				<img src={logo} alt='logo' className='banner-img-logo' />
			</div>
			<div className='banner-links'>
				<Link to='/home' className='banner-link'>Home</Link>
				<Link to='/products' className='banner-link'>Shop</Link>
				<Link to='/contact' className='banner-link'>Contact us</Link>
				<Link to='/cart' className='banner-link'>
					<i className='fa fa-shopping-cart'><span>2</span></i>
				</Link>
			</div>
			<button className='btn-menu'>
				<span className='btn-menu-bar'></span>
			</button>
		</div>
	)
}

export default Banner