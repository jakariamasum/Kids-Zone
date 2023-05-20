import Gallery from "../components/Gallery/Gallery";
import Slider from "../components/Banner";
import 'swiper/css';
import SubCategory from "../components/SubCategory/SubCategory";
import Partners from "../components/Partners/Partners";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Gallery/>
            <SubCategory/>
            <Partners/>
        </div>
    );
};

export default Home;