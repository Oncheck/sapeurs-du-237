import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import '../styles/Home.css';
import { categoriesList } from "../datas/categoriesList";
import { productList } from '../datas/productList'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "./Divider";
import { Modal } from "react-bootstrap"
import { Gallery, Item } from "react-photoswipe-gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


function Home() {
    const navigate = useNavigate()
    const products = productList.filter(products => products.category !== "Tenues d'apparâts (à la demande)")

    useEffect(() => {
        document.title = 'Sapeurs du 237 - Accueil'
    })

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleClose = () => setShow(false);
  	
    const handleSubmit = () => {
        if (email === '') {
            setMessage('Veuillez entrer une adresse email valide')
            setShow(true)
        } else {
            if (email.includes('@')) {
                setMessage("Félicitations ! Vous êtes bien enregistrés parmi les abonnés de Sapeurs du 237")
                setShow(true)
                setEmail('')
            } else {
                setMessage('Veuillez entrer une adresse email valide')
                setShow(true)
            }
        }
    }
    
    return (
        <>
            <Banner /><br /><br /><br /><br />
            <div className="container-slides">
                <ImageSlider />
            </div>

            <div className="home-categories">
                <h1>Nos Catégories</h1>
                <div className="bloc-items">
                    <ul className="list-items">
                        {/* <Gallery>
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                <Masonry columnsCount={4} gutter="30px">
                                    {categoriesList.map((categorie, index) => (
                                        <div className="grid">
                                            <Item
                                                original={categorie.image}
                                                thumbnail={categorie.image}
                                                width="100%"
                                                height="100%"
                                            >
                                                {({ ref, open }) => (
                                                    <img ref={ref} onClick={open} src={categorie.image} />
                                                )}
                                            </Item>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </Gallery> */}
                        {categoriesList.map((categorie, index) => (
                            <li key={index} style={{background: `url(${categorie.image})`, backgroundSize: 'cover'}}>
                                <div className="categorie" onClick={() => navigate(`/category/${categorie.nom}`)}>
                                    <p>{categorie.nom}</p>
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Divider />
            
            <div className="featured-products">
                <h1>Nos produits</h1>
                <div className="container-gallery">
                    <div className="container-image">
                        {products.slice(0, 9).map((product, index) => (
                            // <ProductItem 
                            //     key={index}
                            //     product={product}
                            // />
                            // <li key={index} style={{background: `url(${product.cover})`, backgroundSize: 'cover'}}>
                            //     <div className="categorie" onClick={() => navigate(`/products/${product.name}`)}>
                            //         <p>{product.name}</p>
                            //         <i className="fa fa-arrow-right"></i>
                            //     </div>
                            // </li>
                            <div>
                                <img src={product.cover} alt={product?.name} />
                                <div className="categorie" onClick={() => navigate(`/products/${product.name}`)}>
                                    <p>{product.name}</p>
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    className="btn-voir-plus" 
                    type="button"
                    onClick={() => navigate('/products')}
                >
                    Voir tous les produits
                </button>
            </div>

            <Divider />

            <div className="contact">
                <div className="title1">
                    <h2>Vous pouvez entrer votre adresse email pour recevoir costamment de nouveaux produits</h2>
                    <p>Vous recevrez une réduction de 20% si vous nous envoyez votre adresse mail</p>
                </div>
                <div className="email">
                    <input type="email" placeholder="Votre Email" onChange={(e) => setEmail(e.target.value)} required />
                    <button onClick={handleSubmit}>Envoyer</button>
                </div>
                <div className="title2">
                    <p>Vous pouvez aussi nous contacter sur 
                        <i style={{color: '#075e54', fontWeight: 'bold', margin: '0 5px'}} className="fa fa-whatsapp"></i> 
                        en cliquant <Link>ici </Link>
                        ou par <i className="fa fa-phone"></i><Link> ici</Link>
                    </p>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
            </Modal>

            <Footer />
        </>
    )
}

export default Home;