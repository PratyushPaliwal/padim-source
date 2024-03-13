import HomePageBanner from "../components/home/HomePageBanner";
import Footer from "../components/Footer";
import Detection from "../components/home/Detection";
import Demo from "../components/home/Demo";

function Home (){
    return (
        <div>
            <HomePageBanner />
            <br />
            <Detection />
            <br />
            <Demo/>
            <br />
            <Footer />
        </div>
    );
}

export default Home;