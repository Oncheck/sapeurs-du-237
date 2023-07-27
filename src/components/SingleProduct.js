import Banner from './Banner'
import logo from '../assets/logo.png'
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { productList } from '../datas/productList';
import Slider from 'react-slick';

function SingleProduct() {
	const param = useParams()
	const currentProduct = productList.find(product => product.name === param.name)
	console.log(currentProduct)

	const settings = {
		dots: true,
		arrows: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: '0'
	}

    return (
        <>
            <Banner>
				<div className='banner-help'>
					<h3>Besoin d'aide ?</h3>
					<a href='tel:+237695707732'>
						<i style={{color: '#ff4e00'}} className='fa fa-phone'></i> +237 666666666
					</a>
				</div>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
					<h1 className='lmj-title' style={{ fontFamily: 'Monsterra'}}>SAPEURS DU 237</h1>
				</div>
				<div className='banner-social'>
					<i className='fa fa-facebook'></i>
					<i className='fa fa-instagram'></i>
					<i className='fa fa-youtube'></i>
				</div>
			</Banner>
			<div className='single-product'>
				<div className='slider-left'>
					<Slider {...settings}>
						{currentProduct.images.map((image, index) => (
							<div key={index}>
								<img width={5000} height={100} src={image.src} alt='images' />
							</div>
						))}
					</Slider>
				</div>
				<div className='slider-right'></div>
			</div>
			<Footer />
        </>
    )
}

export default SingleProduct;