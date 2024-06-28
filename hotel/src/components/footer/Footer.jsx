import "./footer.css";
import {
  faHotel,
  faBed,
  faBookmark,
  faBriefcase,
  faSquarePhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem1"><b>Payments</b></li>
          <li className="fListItem">Cash paymennts</li>
          <li className="fListItem">Credit / Debit cards</li>
          <li className="fListItem">PayPal</li>
          <li className="fListItem">Bank Transfer</li>
          
        </ul>
       
        <ul className="fList">
          <li className="fListItem1"><b>Contact</b> </li>
          
          <li className="fListItem"> <FontAwesomeIcon icon={faLocationDot} />Main Street , Paris</li>
          <li className="fListItem">  <FontAwesomeIcon icon={faEnvelope} />GrandHotel@gmail.com </li>
          <li className="fListItem">  <FontAwesomeIcon icon={faSquarePhone} />+9476444555 </li>
        </ul>
        
        <ul className="fList">
          <li className="fListItem1"><b>For Customers</b> </li>
          <li className="fListItem">Room Booking </li>
          <li className="fListItem">Restuarent</li>
          <li className="fListItem">Wedding and Party</li>
          <li className="fListItem">Swimming Pool</li>
          
        </ul>
        
      </div>
      <div className="fText">Copyright © 2022 GrandHotel.</div>
    </div>
  );
};

export default Footer;