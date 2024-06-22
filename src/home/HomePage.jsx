import Navbar from "../layout/Navbar.jsx";
import Footer from "../layout/Footer.jsx";

const HomePage = () => {

    return (
        <>
            <Navbar />
            <div className="h-screen mt-16">
                <h1 className='text-3xl text-center mt-32'>HomePage</h1>
            </div>
            <Footer />

        </>
    );
};

export default HomePage;