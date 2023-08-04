import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import Banner from './Banner'
import Footer from './Footer'

function Cart() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const total = cart.reduce(
		(acc, product) => acc + product.inCart * product.price,
		0
	)
	useEffect(() => {
		document.title = `Sapeurs du 237 : ${cart.length} articles dans le panier`
	}, [total, cart])

	function removeFromCart(id) {
		cart.splice(id, 1);
		updateCart(cart)
	}

	function commander() {
		console.log('commander');
	}

	
	return (
		<>
			<Banner />

			<div className='card'>
				<h2>Panier</h2>
				{cart.length > 0 ? (
					<div>
						<ul>
							{cart.map((product, index) => (
								<div key={`${product.name}-${index}`} className='card-item'>
									<div style={{ display: 'flex'}}>
										<img className='card-item-cover' src={product.cover} alt={`${product.name} cover`} />
										<div>
											<h3 className='card-item-name'>{product.name}</h3>
											<p className='card-item-price'>{product.price} XAF x {product.inCart}</p>
										</div>
										<span 
											onClick={() => removeFromCart(index)} 
											style={{marginLeft: '20px', marginTop: '-5px', cursor: 'pointer'}}
										>
											<i className="fa fa-trash-o"></i>
										</span>
									</div>
									<button onClick={commander} className='btn-cmd'>Commander</button><hr />
								</div>
							))}
						</ul>
						<h3>Total : {total} XAF</h3>
						<button className='btn-cart' onClick={() => localStorage.removeItem('cart')}>Vider le panier</button>
					</div>
				) : (
					<div style={{ fontSize: 20, marginTop: 10}}>Votre panier est vide</div>
				)}
			</div>
			
			<Footer />
		</>
	)
}

export default Cart