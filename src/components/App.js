import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<>
			<Banner>
				<div className='banner-help'>
					<h3>Besoin d'aide ?</h3>
					<a href='tel:+237695707732'>
						<i style={{color: '#ff4e00'}} className='fa fa-phone'></i> +237 666666666
					</a>
				</div>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
					<h1 className='lmj-title' style={{ fontFamily: 'Monsterra'}}>SAPEURS DU 237</h1>
				</div>
				<div className='banner-social'>
					<i className='fa fa-facebook'></i>
					<i className='fa fa-instagram'></i>
					<i className='fa fa-youtube'></i>
				</div>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</>
	)
}

export default App