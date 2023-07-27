import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import { slides } from "../datas/slider";
import Footer from "./Footer";

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

            <Footer />
        </>
    )
}

export default Home;