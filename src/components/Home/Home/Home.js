import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    );
};

export default Home;