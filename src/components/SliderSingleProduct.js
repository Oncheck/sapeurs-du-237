import { useState } from "react"
import '../styles/SliderSingleProduct.css'

const SliderSingleProduct = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    
    
    return (
        <div className="slider">
            <div className="left-arrow" onClick={goToPrevious}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className="right-arrow" onClick={goToNext}>
                <i className="fa fa-arrow-right"></i>
            </div>
            <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex]})` }}></div>
        </div>
    )
}

export default SliderSingleProduct