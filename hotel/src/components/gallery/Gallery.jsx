import React from 'react';
import Slider from 'react-slick';
import './gallery.css';
import '../roomDetails/roomDetails.css';
import myImage1 from './im1.JPG'; 
import myImage2 from './im2.jpg'; 
import myImage3 from './im3.jpg'; 
import myImage4 from './im4.jpg'; 
import myImage5 from './im5.jpg'; 
import myImage6 from './im6.jpg'; 
import myImage7 from './im7.jpg'; 
import myImage8 from './im8.jpg'; 

const SliderComponent = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const sliderItems = [
    {
      id: 1,
      image: myImage1, },
    {
      id: 2,
      image: myImage2, },
    {
      id: 3,
      image: myImage3, },
    {
      id: 4,
      image: myImage4, },
    {
      id: 5,
      image: myImage5, },
    { 
      id: 6,
      image: myImage6, },
    {
      id: 7,
      image: myImage7, },
    {
      id: 8,
      image: myImage8, },
    
  ];

  return (
    
    <div className="sliderContainer">
      <h2 className="titleBar">Our Gallery</h2>
      <p className="texts">
      "Discover the elegance and luxury of our hotel through our captivating gallery, showcasing beautifully designed rooms, inviting amenities, and the scenic beauty of our surroundings. Let our images inspire your next stay and immerse yourself in a world of comfort and relaxation."
    </p>
      <Slider {...sliderSettings}>
        {sliderItems.map((item) => (
          <div  key={item.id}>
            
            <img src={item.image} alt={item.topic} />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default SliderComponent;