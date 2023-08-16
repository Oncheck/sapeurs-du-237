import Banner from './Banner'
import Footer from './Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { productList } from '../datas/productList';
import { useState, useEffect } from 'react';
import SliderSingleProduct from './SliderSingleProduct';
import '../styles/SingleProduct.css'
import Divider from './Divider'
import '../styles/Home.css';
import ProductItem from './ProductItem';
import { Form, Modal, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import guide from '../assets/images/guide.jpg'

function SingleProduct() {
	const param = useParams()
	const [show, setShow] = useState(false);
	const [commande, setCommande] = useState({})
	const currentProduct = productList.find(product => product.name === param.name)
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const navigate = useNavigate()

	useEffect(() => {
        document.title = 'Sapeurs du 237 - ' + currentProduct.name
    })

	const similarProducts = productList.filter(products => products.category === currentProduct.category)
	
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	const handleChange = ({currentTarget}) => {
		const {name, value} = currentTarget
		setCommande({...commande, [name]: value})
	}
	const handleSubmit = async e => {
		e.preventDefault()

		console.log(commande)
	}

	function addToCart({id, name, price, cover}) {
		const currentProductSaved = cart.find((product) => product.name === name)
		if (currentProductSaved) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ id, name, price, cover, inCart: currentProductSaved.inCart + 1 }
			])
			localStorage.setItem('cart', JSON.stringify(cartFilteredCurrentProduct))
		} else {
			updateCart([...cart, { id, name, price, cover, inCart: 1 }])
			localStorage.setItem('cart', JSON.stringify(cart))
		}

	}
	console.log(currentProduct?.images)

    return (
        <>
            <Banner /><br /><br /><br /><br /><br />
			
			<div className='single-product'>
				<div className='produit'>
					<div className='slider-left'>
						<div className='container-slider'>
							{/* <SliderSingleProduct slides={currentProduct?.images} /> */}
						</div>
					</div>
					<div className='slider-right'>
						<div className='info-produit'>
							<h2>{currentProduct.name}</h2><hr />
							<div className='info-produit-header'>
								<h2>Categorie :</h2>
								<p>{currentProduct.category}</p>
							</div>
							<p>{currentProduct.description.desc}</p>
							<p style={{color: '#f3160f'}}>{currentProduct.description.slug}</p>
						</div>
						<hr />

						<div className='info-produit'>
							{currentProduct.description?.tissu && <p><b>Tissu disponible : </b>{currentProduct.description.tissu}</p>}
							<p><b>Couture : </b>Sur-mesure</p>
							{currentProduct?.sur_mesure && <p><b>Prix sur mesure : </b>{currentProduct.sur_mesure} €</p>}
							{currentProduct?.taille_unique && <p><b>Prix taille unique : </b>{currentProduct.taille_unique} €</p>}
							{currentProduct?.prix && <p><b>Prix : </b>{currentProduct.prix} €</p>}
							{currentProduct.description?.couleur && <p><b>Couleur : </b>{currentProduct.description.couleur}</p>}
							{currentProduct.description?.matiere && <p><b>Matière : </b>{currentProduct.description.matiere}</p>}
							<p><i class="fa fa-flag" aria-hidden="true"></i><b> Livraison :</b> Europe, Afrique, Asie</p>
						</div>
						<hr />

						{/* <div className='info-produit' style={{marginTop: '20px'}}>
							<p><i class="fa fa-eye" aria-hidden="true"></i> un des articles les plus recherchés</p>
							<p><i class="fa fa-shopping-cart" aria-hidden="true"></i> apparait dans beaucoup de panier</p>
							<p><i class="fa fa-refresh" aria-hidden="true"></i> remboursé si pas satisfait</p>
							<p><i class="fa fa-credit-card" aria-hidden="true"></i> vous pouvez payer maintenant, ou plus tard</p>
						</div>
						<hr /> */}

						{/* <div className='info-produit'>
							<h2>Description</h2>
							<p style={{marginTop: '10px'}}>The Ayame set is made in a light and soft cotton fabric, particularly pleasant to wear. It is in melhouz, the favorite fabric of Mauritanian women and is ideal for summer. The dyeing is done by hand. The patterns and colors were created, at our request, by a Senegalese dyer. It is composed of wide pants, with pockets and a slightly open top in the back</p>
						</div>
						<hr /> */}

						<button
							className='btn-contact'
							type='button'
							onClick={handleShow}
						>
							<i class="fa fa-envelope" aria-hidden="true"></i> Commander
						</button>
						<button 
							className="btn-card" 
							type="button"
							onClick={() => addToCart(currentProduct.id, currentProduct.name, currentProduct.price, currentProduct.cover)}
						>
							<i class="fa fa-money" aria-hidden="true"></i> Ajouter au panier
						</button>
						<p className='txt-contact'>ou contactez le vendeur dès maintenant</p>
						<button
							className='btn-contact'
							type='button'
							onClick={() => navigate('/contact')}
						>
							<i class="fa fa-envelope" aria-hidden="true"></i> Contactez
						</button>
						<p className='txt-contact'>article proposé par <em>Sapeurs du 237</em></p>
					</div>
				</div>

				<Divider />

				<div className="featured-products">
					<h1>Produits similaires</h1>
					<div className="bloc-items">
						<ul className="products-items">
							{similarProducts.length > 1 ?
								similarProducts.map((product, index) => (
									<ProductItem 
										key={index}
										product={product}
									/>
								)) :
								<ProductItem 
									product={similarProducts}
								/>
							}
						</ul>
					</div>
				</div>
			</div>
			
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Entrer vos mesures</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card style={{marginTop: '-10px'}}>
						<Card.Title style={{textAlign: 'center', marginTop: '10px'}}>Ces mesures doivent être enregistrées en cm²</Card.Title>
						<Card.Body>
							<img src={guide} alt='consigne'width={430} height={300} />
						</Card.Body>
					</Card>
				
					<Form onSubmit={handleSubmit}>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Epaules</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='epaule' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Tour de poitrine</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='tour_poitrine' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Tour de taille (au niveau des hanches)</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='tour_taille' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Tour de ventre</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='tour_ventre' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Biceps</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='biceps' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Longueur des bras</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='longueur_bras' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Longueur du pantalon</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='longueur_pantalon' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Tour de la cuisse</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='tour_cuisse' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Longueur totale (en cm)</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='longueur' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Une photo de vous en vue latérale</Form.Label>
							<Form.Control 
								type='file' 
								onChange={handleChange} 
								name='photo' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Button variant="primary" type="submit">
								Envoyer
							</Button>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>

			<Footer />
        </>
    )
}

export default SingleProduct;