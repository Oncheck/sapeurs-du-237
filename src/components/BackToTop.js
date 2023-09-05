import '../styles/BackToTop.css'

function BackToTop() {

    function scrollToTop() {
        window.scrollTo(0, 10)
    }

    return (
        <div className='container-back-to-top' onClick={scrollToTop}>
            <div className='back-to-top'>
                <i className='fa fa-arrow-up'></i>
            </div>
        </div>
    )
}

export default BackToTop