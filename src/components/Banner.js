import '../styles/Banner.css'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Banner() {
	const navigate = useNavigate()
	const [showLinks, setShowLinks] = useState(false)
	//const savedCart = localStorage.getItem('cart')
	//const cart = savedCart ? JSON.parse(savedCart) : []

	const handleShowLinks = () => {
		setShowLinks(!showLinks)
	}

	function handleClick() {
		window.scrollTo(0, 10)
	}

	return (
		<div className={showLinks ? 'show-menu' : 'banner'}>
			<div className='banner-img'  onClick={() => navigate('/')}>
				<img src={logo} alt='logo' className='banner-img-logo' />
			</div>
			<div className='banner-links'>
				<NavLink to='/home' onClick={handleClick} className='banner-link slideInDown-1'>Accueil</NavLink>
				<NavLink to='/products' onClick={handleClick} className='banner-link slideInDown-2'>Articles</NavLink>
				<NavLink to='/contact' onClick={handleClick} className='banner-link slideInDown-3'>Contact</NavLink>
				{/* <NavLink to='/cart' className='banner-link slideInDown-4'>
					<i className='fa fa-shopping-cart'><span>{cart.length}</span></i> Panier
				</NavLink> */}
				<NavLink to='/espace-mariage' onClick={handleClick} className='banner-link slideInDown-4'>Espace Mariage</NavLink>
			</div>
			<button className='btn-menu' onClick={handleShowLinks}>
				<span className='btn-menu-bar'></span>
			</button>
		</div>
	)
}

export default Banner