import Banner from './Banner'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useParams, useNavigate } from 'react-router-dom';
import { productList } from '../datas/productList';
import ProductItem from './ProductItem';

function App() {
	const {name} = useParams()
	const navigate = useNavigate()
	const productsByCategory = productList.filter(product => product.category === name)
	
	return (
		<>
			<Banner /><br /><br /><br /><br /><br />
			{name !== '' ? (
				<div className="featured-products">
					<h1>Catégorie : {name}</h1>
					<div className="bloc-items">
						<ul className="products-items">
							{productsByCategory.map((product, index) => (
								<ProductItem 
									key={index}
									product={product}
								/>
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
			
			<Footer />
		</>
	)
}

export default App