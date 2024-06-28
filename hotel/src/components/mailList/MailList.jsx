import { faFacebook, faInstagram, faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./mailList.css";
import myImage from './map.JPG'; 
import {

  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailContent">
        <div className="mailColumn">
          <img src={myImage} alt="Image" className="mailImage" />
        </div>
        <div className="mailColumn">
          <h1 >Feel free to reach out to us</h1>
          <span >Sign up and we'll send the best deals to you</span>
          <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <div className="mailInputContainer2">
            <input type="text"   placeholder="Content" />
            </div>
            <button>Send</button>
          </div>
          <div className="mailIcon">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faSkype} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MailList;
