import React from 'react';
import Slider from 'react-slick';
import './roomDetails.css';
import '../about/about.css';
import myImage1 from './std.jpg'; 
import myImage2 from './dulux.jpg'; 
import myImage3 from './dbl.jpg'; 
import myImage4 from './fam.jpg'; 
import myImage5 from './lux.jpg'; 
import myImage6 from './bud.jpg'; 

const SliderComponent = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const sliderItems = [
    {
      id: 1,
      topic: 'Standard Room',
      image: myImage1, 
    },
    {
      id: 2,
      topic: 'Dulux Room',
      image: myImage2, },
    {
      id: 3,
      topic: 'Double Room',
      image: myImage3, 
    },

    {
      id: 4,
      topic: 'Family Room',
      image: myImage4, 
    },
    {
      id: 5,
      topic: 'Luxury Room',
      image: myImage5, 
    },
    {
      id: 6,
      topic: 'Budget Room',
      image: myImage6, 
    },
  ];

  return (
    <div className="sliderContainer">
      <h2 className="sectionTitle">Room Category</h2>
      <p className="texts">
        Find Your Ideal Space: Explore a variety of thoughtfully made room categories, each created to
        satisfy your specific wants and tastes. We provide the ideal lodging for every traveler, from quaint
        cabins to opulent apartments.
      </p>
      <Slider {...sliderSettings}>
        {sliderItems.map((item) => (
          <div className="sliderItem" key={item.id}>
            <div className="greenBow">
              <p>{item.topic}</p>
            </div>
            <img src={item.image} alt={item.topic} className='img' />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderComponent;
