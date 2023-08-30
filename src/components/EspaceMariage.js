import Banner from "./Banner";
import Footer from "./Footer";
import '../styles/EspaceMariage.css'
import { experiences } from "../datas/experiencesList";
import { productsMariage } from "../datas/productsMariageList"

function EspaceMariage() {
    return (
        <div style={{ maxWidth: '1300px' }}>
            <Banner />

            <div className="espace-mariage">
                <div className="banner-mariage">
                    <div className="banner-left"></div>
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
                        <h3>Our top products</h3>
                        <p>Lorem ipsum dolor sit amet, consecteur</p>
                    </div>
                    <div className="items-products">
                        {
                            productsMariage.map((product, index) => (
                                <div key={index} className="product">
                                    <img src={product.img} alt={product.title} />
                                    <h5 style={{fontWeight: 'bold'}}>{product.title}</h5>
                                    <p>{product.description}</p>
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
                    <div className="banner-second">
                        <div className="banner-second-left"></div>
                        <div className="banner-second-right"></div>
                    </div>
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

            <Footer />
        </div>
    )
}

export default EspaceMariage;