import { useState, useEffect } from 'react'
import { productList } from '../datas/productList'
import ProductItem from './ProductItem'
import '../styles/ShoppingList.css'
import '../styles/Filter.css'
import '../styles/Home.css';

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('')
	const [rangeValue, setRangeValue] = useState(10)
	const categories = productList.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)

	useEffect(() => {
        document.title = 'Sapeurs du 237 - Produits'
    })

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
	console.log(productList)
	return (
		<div className='page-products'>
			<div className="featured-products left-side">
                <h1 style={{ marginLeft: '20px'}}>Tous nos produits</h1>
                <div className="bloc-items">
                    <ul className="products-items">
                        {productList.map((product, index) => (
                            <ProductItem 
                                key={index}
                                product={product}
                            />
                        ))}
                    </ul>
                </div>
            </div>
			<div className="filter right-side">
				<div className="filter-search">
					<h3 className="title-filter">Rechercher un produit</h3>
					<form onSubmit={handleSubmit}>
						<input 
							className="input-control" 
							type="text"
							placeholder="Rechercher ici..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</form>
				</div>
				<div className="filter-range">
					<h3 className="title-filter">Price range</h3>
					<div className="dropdown">
						<div className="slider-range">{rangeValue}</div>
						<input
							className="input-range"
							type="range"
							id="amount"
							value={rangeValue}
							onChange={(e) => setRangeValue(e.target.value)}
						/>
					</div>
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
		</div>
	)
}

export default ShoppingList