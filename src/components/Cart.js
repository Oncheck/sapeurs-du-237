import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `Sapeurs du 237 : ${total} XAF d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
				style={{ color: 'black', fontSize: 18}}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div className='card'>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount, cover }, index) => (
							<div key={`${name}-${index}`} className='card-item'>
								<div style={{ display: 'flex'}}>
									<img className='card-item-cover' src={cover} alt={`${name} cover`} />
									<div>
										<h3 className='card-item-name'>{name}</h3>
										<p className='card-item-price'>{price} XAF x {amount}</p>
									</div>
								</div>
								<button className='btn-cmd'>Commander</button><hr />
							</div>
						))}
					</ul>
					<h3>Total : {total} XAF</h3>
					<button className='btn-cart' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div style={{ fontSize: 20, marginTop: 10}}>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
				style={{ color: 'black', fontSize: 18}}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart