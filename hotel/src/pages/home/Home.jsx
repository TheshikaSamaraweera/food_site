import React, { useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import RoomDetails from "../../components/roomDetails/RoomDetails";
import Gallery from "../../components/gallery/Gallery";
import Amenity from "../../components/amenity/Amenity";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

import "./home.css";
const Home = () => {
  useEffect(() => {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('.navListItem');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const sectionId = link.getAttribute('data-section');
        scrollToSection(sectionId);
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rooms">
        <RoomDetails />
      </section>

      <section id="amenity">
        <Amenity />
      </section>
      <Gallery />
      <Testimonials />
      <section id="contact">
        <MailList />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
