import '../styles/Banner.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Banner() {
	return (
		<div className='banner'>
			<div className='banner-img'>
				<img src={logo} alt='logo' className='banner-img-logo' />
			</div>
			<div className='banner-links'>
				<Link to='/home' className='banner-link'>Home</Link>
				<Link to='/products' className='banner-link'>Shop</Link>
				<Link to='#contact' className='banner-link'>Contact us</Link>
				<Link to='#about' className='banner-link'>About us</Link>
				<i className='fa fa-shopping-cart'><span>2</span></i>
			</div>
		</div>
	)
}

export default Banner