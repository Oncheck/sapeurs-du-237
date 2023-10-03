import { useState } from "react"

const SliderSingleProduct = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        width: '100%',
        height: '100%',
        position: 'relative',
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '2%',
        fontSize: '45px',
        color: '#333',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '7%',
        fontSize: '45px',
        color: '#333',
        zIndex: 1,
        cursor: 'pointer'
    }


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
        <div style={sliderStyles} className="slider">
            <div style={leftArrowStyles} className="left-arrow" onClick={goToPrevious}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div style={rightArrowStyles} className="right-arrow" onClick={goToNext}>
                <i className="fa fa-arrow-right"></i>
            </div>
            <div style={slideStyles} className="slide"></div>
            {/* <div style={dotsContainerStyles} className="dots-container">
                {slides.map((slide, index) => (
                    <div className="dot" key={index} style={dotStyles} onClick={() => goToSlide(index)}>
                        .
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default SliderSingleProduct