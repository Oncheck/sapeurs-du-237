import Banner from './Banner'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useParams, useNavigate } from 'react-router-dom';
import { productList } from '../datas/productList';
import { useEffect } from 'react'
import '../styles/Home.css';
import BackToTop from './BackToTop'

function App() {
	const {name} = useParams()
	const navigate = useNavigate()
	const productsByCategory = productList.filter(product => product.category === name)
	
	useEffect(() => {
		document.title = 'Sapeurs du 237 - Catégorie : ' + {name}
		window.scrollTo(0, 10)
	})
	
	
	return (
		<>
			<Banner /><br /><br /><br /><br /><br />

			<div className='home'>

				<BackToTop />

				{name !== '' ? (
					<div className="featured-products" style={{ marginTop: '30px' }}>
						<h1>Catégorie : {name}</h1>
						<div className="container-gallery">
							<div className="container-image">
								{productsByCategory.map((product, index) => (
									<div key={index}>
										<img src={product.cover} alt={product?.name} />
										<div className="categorie" onClick={() => navigate(`/products/${product.name}`)}>
											<p>{product.name}</p>
											<i className="fa fa-arrow-right"></i>
										</div>
									</div>
								))}
							</div>
						</div>
						<button 
							className="btn-voir-plus" 
							type="button"
							onClick={() => navigate('/products')}
						>
							Voir tous les produits
						</button>
					</div>
					) : <ShoppingList />
				}

			</div>

			<Footer />
		</>
	)
}

export default App