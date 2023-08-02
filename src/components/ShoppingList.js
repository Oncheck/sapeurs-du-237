import { useState, useEffect } from 'react'
import { productList } from '../datas/productList'
import ProductItem from './ProductItem'
import '../styles/ShoppingList.css'
import '../styles/Filter.css'
import '../styles/Home.css';

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('')
	const [rangeValue, setRangeValue] = useState(200)
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
	
	const productsRange = productList.filter(products => (
		products.price <= rangeValue &&
		products.name.includes(search)
	))
	
	return (
		<div className='page-products'>
			<div className="featured-products left-side">
                <h1 style={{ marginLeft: '20px', marginTop: '20px'}}>Tous nos produits</h1>
                <div className="bloc-items">
                    <ul className="products-items">
                        {productsRange.length > 0 ?
							productsRange.map((product, index) => (
								<ProductItem 
									key={index}
									product={product}
								/>
							)) : <div className='no-product'>
								<p>Aucun produit trouvé !</p>
							</div>
						}
                    </ul>
                </div>
            </div>
			<div className="filter right-side">
				<div className="filter-search">
					<h3 className="title-filter">Rechercher un produit</h3>
					<input 
						className="input-control" 
						type="text"
						placeholder="Rechercher ici..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="filter-range">
					<h3 className="title-filter">Filtre sur le prix</h3>
					<div className="dropdown">
						<div className="slider-range">{rangeValue} €</div>
						<input
							className="input-range"
							type="range"
							id="amount"
							max='5000'
							value={rangeValue}
							onChange={(e) => setRangeValue(e.target.value)}
						/>
					</div>
				</div>
				<div className="filter-categories">
					<h3 className="title-filter">Catégories</h3>
					<ul style={{marginTop: '-10px'}}>
						{categories.map((category, index) => (
							<li key={index}>
								<input 
									type="checkbox"
									className="checked"
									value={activeCategory}
									onChange={() => setActiveCategory(category)}
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