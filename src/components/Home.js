import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import { slides } from "../datas/slider";
import Footer from "./Footer";
import '../styles/Home.css';
import { categoriesList } from "../datas/categoriesList";
import { productList } from '../datas/productList'
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "./Divider";

const containerStyles = {
    width: '100%',
    height: '500px',
    margin: '50px 20px',
    borderRadius: '30px'
}


function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Sapeurs du 237 - Accueil'
    })

    
    return (
        <>
            <Banner />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>

            <div className="home-categories">
                <h1>Nos catégories</h1>
                <div className="bloc-items">
                    <ul className="list-items">
                        {categoriesList.map((categorie, index) => (
                            <li key={index} style={{background: `url(${categorie.image})`, backgroundSize: 'cover'}}>
                                <div className="categorie">
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
                <div className="bloc-items">
                    <ul className="products-items">
                        {productList.slice(0, 9).map((product, index) => (
                            <ProductItem 
                                key={index}
                                product={product}
                            />
                        ))}
                    </ul>
                </div>
                <button 
                    className="btn voir-plus" 
                    type="button"
                    onClick={() => navigate('/products')}
                >
                    Voir tous les produits
                </button>
            </div>

            <Divider />

            <div className="contact">
                <div className="title1">
                    <h1>Vous pouvez entrer votre adresse email pour recevoir costamment de nouveaux produits</h1>
                    <p>Vous recevrez une réduction de 20% si vous nous envoyez votre adresse mail</p>
                </div>
                <div className="email">
                    <input type="email" placeholder="Entrer votre mail" />
                    <button>Envoyer</button>
                </div>
                <div className="title2">
                    <p>Vous pouvez aussi nous contacter sur <i style={{color: '#075e54', fontWeight: 'bold'}} className="fa fa-whatsapp"></i> en cliquant <Link>ici</Link></p>
                    <p> ou par <i className="fa fa-phone"></i> <Link>ici</Link></p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;