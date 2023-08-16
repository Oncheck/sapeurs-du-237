import { useState, useEffect } from 'react'
import { productList } from '../datas/productList'
import ProductItem from './ProductItem'
import '../styles/ShoppingList.css'
import '../styles/Filter.css'
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom'
import Banner from './Banner'

function ShoppingList() {
	const [activeCategory, setActiveCategory] = useState('Costumes croisés')
	const [search, setSearch] = useState('')
	const [rangeValue, setRangeValue] = useState(1000)
	const categories = productList.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)
	const products = productList.filter(products => products.category !== "Tenues d'apparâts (à la demande)")
	const producstDemanded = productList.filter(products => products.category === "Tenues d'apparâts (à la demande)")
	const navigate = useNavigate()

	useEffect(() => {
        document.title = 'Sapeurs du 237 - Tous les produits'
    })

	
	/*const productsRange = productList.filter(products => (
		products?.name.includes(search) &&
		products.category === activeCategory
	))*/
	
	return (
		<>
			<Banner /><br /><br /><br /><br />

			<div className='page-products'>
				<div className="featured-products left-side">
					<h1 style={{ marginLeft: '10px', marginTop: '25px'}}>Tous nos produits</h1>
					<div className="bloc-items">
						<ul className="products-items">
							{products.length > 0 ?
								products.map((product, index) => (
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
					<h1 style={{ marginLeft: '20px', marginTop: '20px'}}>Produits à la demande</h1>
					<div className="bloc-items">
						<ul className="products-items">
							{producstDemanded.length > 0 ?
								producstDemanded.map((product, index) => (
									<li key={index} onClick={() => navigate('/contact')}>
										<img className='product-img' src={product.cover} alt={`${product.name} cover`} />
										<div className="product">
											<p className='product-name'>{product.category}</p>
											<div className="line-2">
												<span>Livraison en 5 jours</span>
											</div>
										</div>
									</li>
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
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShoppingList