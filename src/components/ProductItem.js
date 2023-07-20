//import CareScale from './CareScale'
import '../styles/ProductItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function ProductItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			
			<div style={{ display: 'flex'}}>
				<p>{name}</p>
				<span className='lmj-plant-item-price'>{price} XAF</span>
			</div>
		</li>
	)
}

export default ProductItem