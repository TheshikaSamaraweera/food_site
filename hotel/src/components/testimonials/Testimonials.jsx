import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../about/about.css';
import './testimonials.css';
import myImage1 from './p3.jpeg'; 
import myImage2 from './p2.jpeg'; 
import myImage3 from './p1.jpeg'; 
const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     
  };

  return (
    <div className="testimonialSlider">
      <h2 className="titleBar">What Our Clients Say</h2>
      
      <Slider {...settings}>
        <div className="testimonialCard">

          <img src={myImage1} alt="" className="testimonialImg" />
          <h3 className="testimonialName1">Anne Clara</h3>
          
          <h3 className="testimonialName2">2023 October 20</h3>
          <p className="testimonialDescription">
          "I had a fantastic stay at GRAND HOTEL. The staff was incredibly welcoming and attentive,
           making me feel right at home from the moment I arrived. The room was immaculate, and the view 
           from my balcony was breathtaking. I also had some of the best meals of my life at
           the hotel's restaurant. I can't recommend this place enough. It's the perfect destination for a relaxing and luxurious getaway."
          </p>
        </div>
        <div className="testimonialCard">
          <img src={myImage2} alt="" className ="testimonialImg" />
          
          <h3 className="testimonialName1">Peter Brown</h3>
          <h3 className="testimonialName2">2023 October 12</h3>
          <p className="testimonialDescription">
          "Our recent stay at GRAND HOTEL was nothing short of exceptional. The attention to detail in every aspect of 
          our stay was remarkable. The room was spacious and elegantly decorated, the amenities were top-notch, and the service 
          was second to none. The hotel's location was perfect for exploring the city, and the concierge 
          was incredibly helpful in providing recommendations and arranging activities. I can't wait to return to this remarkable hotel."
          </p>
        </div>
        <div className="testimonialCard">
          <img src={myImage3} alt="" className="testimonialImg" />
          
          <h3 className="testimonialName1">Lily Olivia</h3>
          <h3 className="testimonialName2">2023 September 30</h3>
          <p className="testimonialDescription">
          "My stay at GRAND HOTEL was extraordinary. The attentive staff, elegant room, and breathtaking views made it exceptional. 
          The dining was a culinary journey, and the spa provided a tranquil escape. I wholeheartedly recommend GRAND HOTEL for an 
          unforgettable stay."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
