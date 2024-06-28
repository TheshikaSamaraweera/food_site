import React from 'react';
import "./about.css";
import myImage1 from './im1.JPG'; 
import myImage2 from './im2.JPG'; 

const AboutSection = () => {
  return (
    <section className="about">
      <h2 className="sectionTitle">About Us</h2>
      <div className="aboutContainer container grid">
        <div className="aboutColumn">
        <img src={myImage1} alt="" className="aboutImg"/>
        <p className="aboutText">
          
          Immerse yourself in number of acres of lush
surroundings, savor gourmet cuisine at
restaurant, and unwind in style at spa name.
Whether you're seeking a romantic getaway, a
family retreat, or a sophisticated business stay,
we promises an unparalleled experience where
every detail is meticulously curated to ensure
your stay is nothing less than extraordinary."
</p>
        </div>
        <div className="aboutColumn">
          <p className="aboutText">
          "Welcome to Grand Hotel a haven of luxury
and relaxation nestled in the heart of
Colombo. With number of exquisitely
designed rooms and suites, each offering
specific amenities, our hotel is a blend of
elegance and modern comfort. Our
commitment to exceptional service ensures
that every guest's experience is nothing short
of extraordinary.
          </p>
          <img src={myImage2} alt="" className="aboutImg"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
