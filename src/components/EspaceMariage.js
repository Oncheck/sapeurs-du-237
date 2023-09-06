import Banner from "./Banner";
import Footer from "./Footer";
import '../styles/EspaceMariage.css'
import '../styles/Home.css'
import { experiences } from "../datas/experiencesList";
import { productsMariage } from "../datas/productsMariageList"
import BackToTop from "./BackToTop";
import photographe from '../assets/images/slides/Bannière Photographe.jpg'
import site_web from '../assets/images/slides/Bannière Oncheck.jpg'
import vetement from '../assets/images/slides/Bannière costume.jpg'

function EspaceMariage() {
    return (
        <div>
            <Banner />

            <div className="home">

                <BackToTop />

                <div className="espace-mariage">
                    <div className="banner-mariage">
                        <div className="banner-left">
                            <h4>Bienvenue dans l’espace Mariage de Sapeurs du 237!</h4>
                            <p>Nous vous offrons un spectre divers et varié de services pour votre cérémonie de mariage.</p>
                        </div>
                        <div className="banner-right"></div>
                    </div>
                    <div className="experiences">
                        {
                            experiences.map((experience, index) => (
                                <div key={index} className="experience">
                                    <span>{experience.value}+</span>
                                    <p>{experience.slug}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="products">
                        <div className="title">
                            <h3>Robes de mariées</h3>
                            <p>Vous avez fait le bon choix chez Sapeurs du 237 !!!</p>
                        </div>
                        <div className="items-products">
                            {
                                productsMariage.map((product, index) => (
                                    <div key={index} className="product">
                                        <img src={product.img} alt='robe de mariée' />
                                        <h6 style={{fontWeight: 'bold'}}>Nous vous aidons à concevoir</h6>
                                        <ul>
                                            <li>Vos robes de mariées à dentelles, voiles, ou personnalisées en fonction de choix. Nos équipes vous aideront à matérialiser vos idées en concept unique d’artiste. </li>
                                            <li>Vos robes sont conçues sur-mesure.</li>
                                            <li>Pour vos prises de mesures, design, conseil et devis, prenez rendez-vous avec une de nos conseillères.</li>
                                        </ul>
                                        <button>Read more</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="how-we-do">
                        <div className="title">
                            <h3>How we do it</h3>
                            <p>Lorem ipsum dolor sit amet, consecteur</p>
                        </div>
                        <div className="carre-container">
                            <div className="carre">
                                <div className="carre-left"></div>
                                <div className="carre-right"></div>
                            </div>
                            <div className="carre-center"></div>
                        </div>
                        <div className="banner-second">
                            <div className="banner-second-left"></div>
                            <div className="banner-second-right"></div>
                        </div>
                    </div>
                    <div className="container-publicite">
                        <div className="pub-carre-container">
                            <img src={vetement} alt="bouquet de fleur" />
                        </div>
                        <div className="pub-description">
                            <div className="title">
                                <h3>Vêtements sur mesure</h3>
                                <p>Nos équipes vous accompagnent dans le choix et la confection (sur-mesure) de vos vêtements de mariage ainsi que le Design qui vous convient.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="container-publicite">
                        <div className="pub-carre-container">
                            <img src={photographe} alt="bouquet de fleur" />
                        </div>
                        <div className="pub-description">
                            <div className="title">
                                <h3>Photographe qualifié pour vos cérémonies</h3>
                                <p>Un couple élégant et charismatique, ça donne envie de faire des photos avec! Notre photographe professionnel est à votre service pour toutes vos prestations: films de mariage, reportages, vidéos, photos avec drônes, fiançailles, etc.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="container-publicite">
                        <div className="pub-carre-container">
                            <img src={site_web} alt="bouquet de fleur" />
                        </div>
                        <div className="pub-description">
                            <div className="title">
                                <h3>Concevez votre site web/app mobile</h3>
                                <p>Un mariage réussi nécessite une bonne organisation en amont. Chez Sapeurs du 237, nous vous offrons les prestations suivantes  qui vous allègent les charges: conception de site Web pour marié(e)s, billetteries digitales, faire-part, plan de tables, QR Code</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us">
                        <h3>Contactez-nous</h3>
                        <p>Un mariage réussi nécessite une bonne organisation en amont. Chez Sapeurs du 237, nous vous offrons les prestations suivantes  qui vous allègent les charges: conception de site Web pour marié(e)s, billetteries digitales, faire-part, plan de tables, QR Code</p>
                    </div>
                    <div className="newsletter">
                        <div className="title">
                            <h3>Subscribe to our newsletter</h3>
                            <p>Lorem ipsum dolor sit amet, consecteur. Lorem ipsum dolor sit amet, consecteur</p>
                        </div>
                        <div className="content-form">
                            <div className="row input">
                                <div className="col-lg-12 input-item">
                                    <input className="form-control" type="text" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div className="row input">
                                <div className="col-lg-12 input-item">
                                    <input className="form-control" type="text" placeholder="Your Mail" required />
                                </div>
                            </div>
                            <div className="row input">
                                <div className="col-lg-12 input-item">
                                    <textarea className="form-control" rows={4} placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default EspaceMariage;