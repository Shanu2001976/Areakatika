import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import AboutUs from './aboutus/AboutUs';
// import Products from './products/Products';
import Gallery from './gallery/Gallery';
import Community from './community/Community';
import GetInTouch from './getintouch/GetInTouch';
import CancellationsRefunds from './legal/CancellationsRefunds';
import PrivacyPolicy from './legal/PrivacyPolicy';
import ShippingPolicy from './legal/ShippingPolicy';
import TermsConditions from './legal/TermsConditions';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><AboutUs /></section>
              {/* <section id="products"><Products /></section> */}
              <section id="gallery"><Gallery /></section>
              <section id="community"><Community /></section>
              <section id="contact"><GetInTouch /></section>
            </>
          } />
          <Route path="/cancellation" element={<CancellationsRefunds />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
