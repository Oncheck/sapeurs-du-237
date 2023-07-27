import '../styles/ProductItem.css'
import { useNavigate } from 'react-router-dom'

function ProductItem({ product }) {
	const navigate = useNavigate()

	function handleClick(product) {
		navigate('/products/' + product.name)
	}

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(product)}>
			<img className='lmj-plant-item-cover' src={product.cover} alt={`${product.name} cover`} />			
			<div style={{display: 'flex'}}>
				<p>{product.name}</p>
				<span style={{fontSize: '13px', marginLeft: '10px', marginTop: '18px', background: ''}}>{product.category}</span>
			</div>
			<div>
				<span className='lmj-plant-item-price'>{product.price} XAF</span>
				<span style={{fontSize: '12px', marginLeft: '15px', background: '#ffcb45'}}>Livraison en 5 jours</span>
			</div>
		</li>
	)
}

export default ProductItem