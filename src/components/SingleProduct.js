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
import emailjs from '@emailjs/browser'
import BackToTop from './BackToTop';

function SingleProduct() {
	const {id} = useParams()
	const [show, setShow] = useState(false);
	const [commande, setCommande] = useState({})
	const currentProduct = productList.find(product => product.id === parseInt(id))
	const navigate = useNavigate()
	const [statusEmail, setStatusEmail] = useState(0)

	useEffect(() => {
        document.title = 'Sapeurs du 237 - ' + currentProduct.name
		window.scrollTo(0, 10)
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

		emailjs.send('service_xwsdc4i','template_58hj8hj', commande, 'pqmHwLj6l2G7npMob')
		.then(result => {
            setStatusEmail(2)
            console.log(result.text)
			setShow(false)
        })
        .catch(error => {
            setStatusEmail(3)
            console.log(error)
        })
	}


    return (
        <>
            <Banner /><br /><br /><br /><br /><br />

			<BackToTop />
			
			<div className='single-product'>
				<div className='produit'>
					<div className='slider-left'>
						<div className='container-slider'>
							{
								currentProduct.images ?
								<SliderSingleProduct slides={currentProduct.images} /> :
								<img src={currentProduct.cover} alt={currentProduct?.name} />
							}
						</div>
					</div>
					<div className='slider-right'>
						<div className='info-produit'>
							<h2>{currentProduct.name}</h2><hr />
							<div className='info-produit-header'>
								<h2>Categorie :</h2>
								<p style={{fontWeight: 'bold'}}>{currentProduct.category}</p>
							</div>
							<p>{currentProduct.description.desc}</p>
							<p style={{color: '#a98b3f', fontWeight: 'bold'}}>{currentProduct.description.slug}</p>
						</div>
						<hr />

						<div className='info-produit'>
							{currentProduct.description?.tissu && <p><i class="fa fa-person" aria-hidden="true"></i><b>Tissu disponible : </b>{currentProduct.description.tissu}</p>}
							<p><b>Couture : </b>Sur-mesure</p>
							{currentProduct?.sur_mesure && <p><i class="fa fa-money" aria-hidden="true"></i><b>Prix sur mesure : </b>{currentProduct.sur_mesure} €</p>}
							{currentProduct?.taille_unique && <p><i class="fa fa-money" aria-hidden="true"></i><b>Prix taille unique : </b>{currentProduct.taille_unique} €</p>}
							{currentProduct?.prix && <p><b>Prix : </b>{currentProduct.prix} €</p>}
							{currentProduct.description?.couleur && <p><b>Couleur : </b>{currentProduct.description.couleur}</p>}
							{currentProduct.description?.matiere && <p><b>Matière : </b>{currentProduct.description.matiere}</p>}
							<p><i class="fa fa-flag" aria-hidden="true"></i><b> Livraison :</b> Europe, Afrique, Asie</p>
						</div>
						<hr />

						<button
							className='btn-card'
							type='button'
							onClick={handleShow}
						>
							<i class="fa fa-money" aria-hidden="true"></i> Commander
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
					<div className="container-gallery">
						<div className="container-image">
							{similarProducts.length > 1 ?
								similarProducts.map((product, index) => (
									<div key={index}>
										<img src={product.cover} alt={product?.name} />
										<div className="categorie" onClick={() => navigate(`/products/${product.id}`)}>
											<p>{product.name}</p>
											<i className="fa fa-arrow-right"></i>
										</div>
									</div>
								)) :
								<ProductItem 
									product={similarProducts}
								/>
							}
						</div>
					</div>
				</div>
			</div>
			
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Entrer vos mesures</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card style={{marginTop: '-10px'}}>
						<Card.Title style={{textAlign: 'center', marginTop: '10px'}}>Ces mesures doivent être enregistrées en cm</Card.Title>
						<Card.Body>
							<img src={guide} alt='consigne' width={'100%'} height={'100%'} />
						</Card.Body>
					</Card>
				
					<Form onSubmit={handleSubmit}>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Nom</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='nom' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Email</Form.Label>
							<Form.Control 
								type='email' 
								onChange={handleChange} 
								name='email' 
								required
							/>
						</Form.Group>
						<Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Téléphone</Form.Label>
							<Form.Control 
								type='text' 
								onChange={handleChange} 
								name='tel' 
								required
							/>
						</Form.Group>
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
						{/* <Form.Group className='form-group mt-4'>
							<Form.Label className='control-label'>Une photo de vous en vue latérale</Form.Label>
							<Form.Control 
								type='file' 
								onChange={handleChange} 
								name='photo' 
								required
							/>
						</Form.Group> */}
						<Form.Group className='form-group mt-4'>
							<Button variant="primary" type="submit" style={{ width: '100%' }}>
								{
                                    statusEmail === 0 ? 'Envoyer'
                                    : (statusEmail === 1 ? 'En cours...' 
                                    : (statusEmail === 2 ? 'Envoyé !' 
                                    : 'Erreur !'))
                                }
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