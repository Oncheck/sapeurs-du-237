import { useState } from 'react'
import { productList } from '../datas/productList'
import PlantItem from './ProductItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = productList.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)

	function addToCart(name, price, cover) {
		const currentProductSaved = cart.find((product) => product.name === name)
		if (currentProductSaved) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ name, cover, price, amount: currentProductSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, cover, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{productList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} style={{ marginBottom: '20px'}}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button className='btn-add' onClick={() => addToCart(name, price, cover)}>Ajouter au panier</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList