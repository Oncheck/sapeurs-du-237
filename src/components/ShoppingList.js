import { useState } from 'react'
import { productList } from '../datas/productList'
import ProductItem from './ProductItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import '../styles/Filter.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('')
	const categories = productList.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)

	function addToCart(id, name, price, cover) {
		const currentProductSaved = cart.find((product) => product.name === name)
		if (currentProductSaved) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ id, name, cover, price, amount: currentProductSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { id, name, cover, price, amount: 1 }])
		}

	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(search)
	}

	return (
		<>
			<div className='lmj-shopping-list'>
				{/* <Categories
					categories={categories}
					setActiveCategory={setActiveCategory}
					activeCategory={activeCategory}
				/> */}

				<ul className='lmj-plant-list'>
					{productList.map(({ id, cover, name, price, category }) =>
						!activeCategory || search === name || search === category || activeCategory === category ? (
							<div key={id} style={{ marginBottom: '20px'}}>
								<ProductItem
									cover={cover}
									name={name}
									price={price}
									category={category}
								/>
								<button className='btn-add' onClick={() => addToCart(id, name, price, cover)}>
									<i className="fa fa-shopping-cart" style={{marginRight: '5px'}}></i>
									Ajouter au panier</button>
							</div>
						) : null
					)}
				</ul>
			</div>
			<div className="filter">
				<div className="filter-search">
					<h3 className="title-filter">Rechercher...</h3>
					<form onSubmit={handleSubmit}>
						<input 
							className="input-control" 
							type="text"
							placeholder="Rechercher ici..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button type='submit'><i className='fa fa-search'></i></button>
					</form>
				</div>
				<div className="filter-range">
					<h3 className="title-filter">Price range</h3>
					<ul className="dropdown">
						<li>
							<div className="slider-range"></div>
							<input
								className="input-range"
								type="text"
								id="amount"
							/>
						</li>
					</ul>
				</div>
				<div className="filter-categories">
					<h3 className="title-filter">Catégories</h3>
					<ul>
						{categories.map((category, index) => (
							<li key={index}>
								<input 
									type="checkbox"
									className="checked"
									value={category}
									onChange={(e) => setActiveCategory(e.target.value)}
								/>
								<span className="span">{category}</span>
							</li>
						))}<br />
						<button
							className='btn-cmd' 
							onClick={() => setActiveCategory('')}
						>
							Réinitialiser
						</button>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ShoppingList