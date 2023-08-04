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
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].src})`
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

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '40px',
        marginTop: '-5%'
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                <i className="fa fa-arrow-right"></i>
            </div>
            <div style={slideStyles}>
                {/* <Item
                    key={index}
                    thumbnail={image.src}
                    width='100%'
                    height='100%'
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={image.src} />
                    )}
                </Item> */}
            </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, index) => (
                    <div key={index} style={dotStyles} onClick={() => goToSlide(index)}>
                        .
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderSingleProduct