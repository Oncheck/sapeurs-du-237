//import CareScale from './CareScale'
import '../styles/ProductItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function ProductItem({ cover, name, price, category }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />			
			<div style={{display: 'flex'}}>
				<p>{name}</p>
				<span style={{fontSize: '13px', marginLeft: '10px', marginTop: '18px', background: ''}}>{category}</span>
			</div>
			<div style={{}}>
				<span className='lmj-plant-item-price'>{price} XAF</span>
				<span style={{fontSize: '12px', marginLeft: '15px', background: '#87e990'}}>Livraison en 5 jours</span>
			</div>
		</li>
	)
}

export default ProductItem