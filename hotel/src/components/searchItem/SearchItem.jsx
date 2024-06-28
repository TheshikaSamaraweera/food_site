import { Link } from "react-router-dom";
import './searchItem.css';

const imageSources = [
  "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg",
   "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iVFREPkQSD8E8UIav6WGfosCv1WaIYpWMg&usqp=CAU"
];

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="imageContainer">
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="siImg"
          />
        ))}
      </div>
      <div className="siDesc">
        <h1 className="siTitle">{item.name} Room</h1>
        <span className="siFloorNum">{item.floorNum} Floor</span>
        <span className="siWifiOp">Free Wifi Facilities</span>
        <span className="siSubtitle">
           Wth Air conditioning and Hot water bathroom facilities
        </span>
        <span className="siFeatures">{item.description}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className ="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/rooms/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;