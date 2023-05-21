import Gallery from "../components/Gallery/Gallery";
import Slider from "../components/Banner";
import 'swiper/css';
import SubCategory from "../components/SubCategory/SubCategory";
import Partners from "../components/Partners/Partners";
import RecentBlog from "../components/RecentBlog/RecentBlog";
import useTitlte from "../hooks/useTitle";

const Home = () => {
    useTitlte('Home');
    return (
        <div>
            <Slider/>
            <Gallery/>
            <SubCategory/>
            <RecentBlog/>
            <Partners/>
        </div>
    );
};

export default Home;