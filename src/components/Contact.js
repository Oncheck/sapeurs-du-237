import Banner from "./Banner";
import '../styles/Contact.css';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import BackToTop from './BackToTop'

const Contact = () => {
    const [tel, setTel] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({
        nom: nom,
        tel: tel,
        email: email,
        message: message
    })
    const [statusEmail, setStatusEmail] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({
            nom: nom, 
            tel: tel, 
            email: email, 
            message: message
        })
        console.log(form)
        setStatusEmail(1)
        emailjs.send('service_xwsdc4i', 'template_98hlzyl', form, 'pqmHwLj6l2G7npMob')
        .then(result => {
            setStatusEmail(2)
            console.log(result.text)
            setEmail('')
            setNom('')
            setTel('')
            setMessage('')
        })
        .catch(error => {
            setStatusEmail(3)
            console.log(error)
        })
    }

    useEffect(() => {
        document.title = 'Sapeurs du 237 - Contact'
    })

    return (
        <>
            <Banner /><br /><br /><br /><br />

            <BackToTop />

            <div className="contact">
                <h1>Nos contacts</h1>
                <div className="card-contact">
                    <div className="item-contact">
                        <div className="icon">
                            <i className="fa fa-map"></i>
                        </div>
                        <h2>Adresse</h2>
                        <p>Nous sommes dans deux pays actuellement: le Cameroun et l'Allemange</p>
                    </div>
                    <div className="item-contact">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h2>Email</h2>
                        <p>Vous pouvez nous contacter à l'adresse :</p>
                        <p><Link to='mailto:sapeur237@yahoo.com'>sapeur237@yahoo.com</Link></p>
                    </div>
                    <div className="item-contact">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h2>Téléphone</h2>
                        <p>
                            Allemagne : <Link to='tel:+491795273527'>+49 1795 273527</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-form">
                <div className="content-header">
                    <h1>Vous avez une question ?</h1>
                    <p>Si vous avez une préoccupation à nous faire parvenir, remplissez le formulaire suivant</p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="row input">
                            <div className="col-lg-6">
                                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" placeholder="Votre Nom" required />
                            </div>
                            <div className="col-lg-6">
                                <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" placeholder="Votre Téléphone" required />
                            </div>
                        </div>
                        <div className="row input">
                            <div className="col-lg-6">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Votre Email" required />
                            </div>
                        </div>
                        <div className="row input">
                            <div className="col-lg-12">
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" rows={5} placeholder="Votre Message" required></textarea>
                            </div>
                        </div>
                        <div className="input">
                            <button type="submit" className="btn btn-submit">
                                {
                                    statusEmail === 0 ? 'Envoyer'
                                    : (statusEmail === 1 ? 'En cours...' 
                                    : (statusEmail === 2 ? 'Envoyé !' 
                                    : 'Erreur !'))
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;