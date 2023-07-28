import { useNavigate } from 'react-router-dom'

function ProductItem({ product, index }) {
	const navigate = useNavigate()

	function handleClick(product) {
		navigate('/products/' + product.name)
	}

	return (
		<li key={index} onClick={() => handleClick(product)}>
			<img className='product-img' src={product.cover} alt={`${product.name} cover`} />
			<div className="product">
				<div className="line-1">
					<p>{product.name}</p>
					<span>{product.category}</span>
				</div>
				<div className="line-2">
					<p>{product.price} XAF</p>
					<span>Livraison en 5 jours</span>
				</div>
			</div>
		</li>
	)
}

export default ProductItem