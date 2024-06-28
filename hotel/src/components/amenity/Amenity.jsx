import React from 'react';
import './amenity.css';
import '../about/about.css';
import myImage1 from './pool.JPG'; 
import myImage2 from './rest.JPG'; 
import myImage3 from './gym.JPG'; 
import myImage4 from './spa.JPG';
import myImage5 from './chil.jpg';
import myImage6 from './prk.jpg';

const blocks = [
  {
    id: 1,
    topic: 'swimming Pool',
    imageSrc: myImage1,
    description: 'Dive into relaxation and fun with our pristine swimming pool, where you can enjoy refreshing swims, soak up the sun, and create unforgettable memories in a tranquil aquatic setting.',
  },
  {
    id: 2,
    topic: 'On Site Restuarent',
    imageSrc: myImage2,
    description: 'Experience the convenience and indulgence of our on-site restaurant, where you can savor a delightful array of culinary creations without leaving the comfort of our hotel.',
  },
  {
    id: 3,
    topic: 'Fitness center',
    imageSrc: myImage3,
    description: 'Stay active and maintain your fitness routine during your stay at our hotel with our well-equipped fitness center.',
  },
  {
    id: 4,
    topic: 'Spa and Wellness center',
    imageSrc:myImage4,
    description: 'Pamper yourself and experience ultimate relaxation at our luxurious spa and wellness center. ',
  },
  {
    id: 5,
    topic: 'Chilcare Center',
    imageSrc: myImage5,
    description: 'Enjoy your stay worry-free while we take care of your little ones at our onsite childcare center.',
  },
  {
    id: 6,
    topic: 'parking',
    imageSrc: myImage6,
    description: 'Convenient and secure parking facilities are available at our hotel, providing you with peace of mind and hassle-free access to your vehicle throughout your stay.',
  },
];

const TwoColumnLayout = () => {
  return (
    <section ><h2 className="titleBar">Amenity Services</h2>
    <p className="texts">
      Find Your Ideal Space: Explore a variety of thoughtfully made room categories, each created to
      satisfy your specific wants and tastes. We provide the ideal lodging for every traveler, from quaint
      cabins to opulent apartments.
    </p>
      
    
    <div className="twoColumnLayout">
      
      <div className="column1">
        {blocks.slice(0, 3).map((block) => (
          <div className="block" key={block.id}>
            <div >
            <img src={block.imageSrc} alt={block.topic} />
         
              <h3>{block.topic}</h3>
              <p>{block.description}</p>
            </div>
             </div>
        ))}
      </div>
      <div className="column2">
        {blocks.slice(3).map((block) => (
            
          <div className="block" key={block.id}>
            <div >
            <h3>{block.topic}</h3>
              
              <p>{block.description}</p>
              <img src={block.imageSrc} alt={block.topic} />
            
            </div>
              </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TwoColumnLayout;