import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import { slides } from "../datas/slider";
import Footer from "./Footer";
import '../styles/Home.css';
import { categoriesList } from "../datas/categoriesList";
import { productList } from '../datas/productList'
import { Link } from "react-router-dom";

const containerStyles = {
    width: '100%',
    height: '500px',
    margin: '0 auto',
    borderRadius: '30px'
}

function Home() {
    return (
        <>
            <Banner />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>

            <div className="home-categories">
                <h2>Nos catégories</h2>
                <div className="bloc-items">
                    <ul className="list-items">
                        {categoriesList.map((categorie, index) => (
                            <li key={index}>
                                <div className="categorie">
                                    <p>{categorie.nom}</p>
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="featured-products">
                <h2>Nos produits</h2>
                <div className="bloc-items">
                    <ul className="products-items">
                        {productList.slice(0, 7).map((product, index) => (
                            <li key={index}>
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
                        ))}
                    </ul>
                </div>
                <button className="btn voir-plus" type="button">Voir tous les produits</button>
            </div>

            <div className="contact">
                <div className="title1">
                    <h2>Vous pouvez entrer votre adresse email pour recevoir costamment de nouveaux produits</h2>
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