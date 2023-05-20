import Gallery from "../components/Gallery/Gallery";
import Slider from "../components/Banner";
import 'swiper/css';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Gallery/>
        </div>
    );
};

export default Home;