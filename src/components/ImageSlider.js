import { useState } from "react"
import '../styles/ImageSlider.css'
import { slides } from "../datas/slider";

const ImageSlider = () => {
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="slider">
            <div className="left-arrow" onClick={goToPrevious}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className="right-arrow" onClick={goToNext}>
                <i className="fa fa-arrow-right"></i>
            </div>
            <div className="slide">
                <img src={slides[currentIndex].url} alt='slide' />
                <p>{slides[currentIndex].description}</p>
            </div>
            <div className="dots">
                {slides.map((slide, index) => (
                    <div className="dot" key={index} onClick={() => goToSlide(index)}>
                        .
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider