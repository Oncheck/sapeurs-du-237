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

			<div className='home' style={{ maxWidth: '1000px', margin: '0 auto' }}>

				<BackToTop />

				{name !== '' ? (
					<div className="home-categories" style={{ marginTop: '30px' }}>
						<h1>Catégorie : {name}</h1>
						<div className="bloc-items">
							<ul className="list-items">
								{productsByCategory.map((product, index) => (
									<li key={index} style={{background: `url(${product.cover})`, backgroundSize: 'cover'}}>
										<div className="categorie" onClick={() => navigate(`/products/${product.id}`)}>
											<p>{product.name}</p>
											<i className="fa fa-arrow-right"></i>
										</div>
									</li>
								))}
							</ul>
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