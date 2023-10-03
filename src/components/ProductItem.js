import { useNavigate } from 'react-router-dom'

function ProductItem({ product, index }) {
	const navigate = useNavigate()

	function handleClick(id) {
		navigate('/products/' + parseInt(id))
	}

	return (
		<li key={index} onClick={() => handleClick(product.id)}>
			<img className='product-img' src={product.cover} alt={`${product.name} cover`} />
			<div className="product">
				<p className='product-name'>{product.name}</p>
				<p className='product-category'>{product.category}</p>
				<div className="line-2">
					{product.prix && <p>{product.prix} €</p>}
					<span>Livraison en 5 jours</span>
				</div>
			</div>
		</li>
	)
}

export default ProductItem