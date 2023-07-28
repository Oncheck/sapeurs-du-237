import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<>
			<Banner />
			<div>
				{/* <Cart cart={cart} updateCart={updateCart} /> */}
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</>
	)
}

export default App