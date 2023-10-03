import { useState, useEffect } from 'react'
import { productList } from '../datas/productList'
import { categoriesList } from '../datas/categoriesList'
import '../styles/ShoppingList.css'
import '../styles/Filter.css'
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom'
import Banner from './Banner'
import Footer from './Footer'
import BackToTop from './BackToTop'

function ShoppingList() {
	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('')
	const [rangeValue, setRangeValue] = useState(10)
	const categories = categoriesList.filter(categories => categories.nom !== "Tenues d'apparâts (à la demande)")
	const products = productList.filter(products => products.category !== "Tenues d'apparâts (à la demande)")
	const producstDemanded = productList.filter(products => products.category === "Tenues d'apparâts (à la demande)")
	const navigate = useNavigate()

	useEffect(() => {
        document.title = 'Sapeurs du 237 - Tous les produits'
		window.scrollTo(0, 10)
    }, [search, rangeValue, activeCategory])

	
	const productsRange = products.filter(products => (
		products.category === activeCategory &&
		products.name.includes(search)
	))
	
	return (
		<>
			<Banner /><br /><br /><br /><br />
			

			<BackToTop />

			<div className='page-products'>
				<div className="featured-products left-side responsive-position-1">
					<h1 style={{ textAlign: 'center', marginTop: '50px'}}>Tous nos produits</h1>
					<div className="container-gallery">
						<div className="container-image">
							{activeCategory === '' ? (
								products.slice(0, rangeValue).map((product, index) => (
									<div key={index}>
										<img src={product.cover} alt={product?.name} />
										<div className="categorie" onClick={() => navigate(`/products/${product.id}`)}>
											<p>{product.name}</p>
											<i className="fa fa-arrow-right"></i>
										</div>
									</div>
								))
							) : (
								productsRange.length > 0 ?
								productsRange.slice(0, rangeValue).map((product, index) => (
									<div key={index}>
										<img src={product.cover} alt={product?.name} />
										<div className="categorie" onClick={() => navigate(`/products/${product.id}`)}>
											<p>{product.name}</p>
											<i className="fa fa-arrow-right"></i>
										</div>
									</div>
								)) : <div className='no-product'>
									<p>Aucun produit trouvé !</p>
								</div>
							)}
						</div>
					</div>
					<h1 style={{ textAlign: 'center', marginTop: '40px'}}>Produits à la demande</h1>
					<div className="container-gallery">
						<div className="container-image">
							{producstDemanded.length > 0 ?
								producstDemanded.map((product, index) => (
									<div key={index}>
										<img src={product.cover} alt={product?.name} />
										{/* <div className="categorie">
											<p>{product.category}</p>
										</div> */}
									</div>
								)) : <div className='no-product'>
									<p>Aucun produit trouvé !</p>
								</div>
							}
						</div>
					</div>
				</div>
				<div className="filter right-side responsive-position-2">
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
						<h3 className="title-filter">Filtre sur le nombre d'afichage</h3>
						<div className="dropdown">
							<div className="slider-range">{rangeValue} produits</div>
							<input
								className="input-range"
								type="range"
								id="amount"
								max={activeCategory === '' ? products.length : productsRange.length}
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
										onChange={() => setActiveCategory(category.nom)}
									/>
									<span className="span"> {category.nom}</span>
								</li>
							))}<br />
						</ul>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default ShoppingList