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
import { Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function SingleProduct() {
	const param = useParams()
	const navigate = useNavigate()
	const [show, setShow] = useState(false);
	const [commande, setCommande] = useState({})
	const currentProduct = productList.find(product => product.name === param.name)

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

    return (
        <>
            <Banner />
			
			<div className='single-product'>
				<div className='produit'>
					<div className='slider-left'>
						<div className='container-slider'>
							<SliderSingleProduct slides={currentProduct.images} />
						</div>
					</div>
					<div className='slider-right'>
						<div className='info-produit'>
							<h1>{currentProduct.name}</h1><hr />
							<div className='info-produit-header'>
								<h2>{currentProduct.price} €</h2>
								<p>{currentProduct.category}</p>
							</div>
							<p>Si vous commandez ce produit maintenant, vous l'aurez dans moins de <b>5 jours</b></p>
							<p>Livraison dans tous les pays <i class="fa fa-flag" aria-hidden="true"></i>. Principalement au Cameroun</p>
						</div>
						<hr />

						<div className='info-produit' style={{marginTop: '20px'}}>
							<p><i class="fa fa-eye" aria-hidden="true"></i> un des articles les plus recherchés</p>
							<p><i class="fa fa-shopping-cart" aria-hidden="true"></i> apparait dans beaucoup de panier</p>
							<p><i class="fa fa-refresh" aria-hidden="true"></i> remboursé si pas satisfait</p>
							<p><i class="fa fa-credit-card" aria-hidden="true"></i> vous pouvez payer maintenant, ou plus tard</p>
						</div>
						<hr />

						<div className='info-produit'>
							<h2>Description</h2>
							<p style={{marginTop: '10px'}}>The Ayame set is made in a light and soft cotton fabric, particularly pleasant to wear. It is in melhouz, the favorite fabric of Mauritanian women and is ideal for summer. The dyeing is done by hand. The patterns and colors were created, at our request, by a Senegalese dyer. It is composed of wide pants, with pockets and a slightly open top in the back</p>
						</div>
						<hr />

						<button 
							className="btn-card" 
							type="button"
							onClick={handleShow}
						>
							<i class="fa fa-money" aria-hidden="true"></i> Commander
						</button>
						<p className='txt-contact'>ou contactez le vendeur dès maintenant</p>
						<button
							className='btn-contact'
							type='button'
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
					<p>ces mesures doivent être enregistrées en cm²</p>
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