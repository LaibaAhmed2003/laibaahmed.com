import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="Footer-container" id="footer">
        <div className="footer-sec1">
          <h2>Let’s work together.</h2>
          <div className="connect">
            <h3>Have a project in mind?</h3>
            <div className="long-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <h3>Let’s Connect</h3>
          </div>
        </div>

        <div className="footer-sec2">
          <div className="f-sec">
            <h3>Company</h3>
            <h5>My Work</h5>
            <h5>Get Free Audit</h5>
          </div>
          <div className="f-sec">
            <h3>Others</h3>
            <h5>Contact</h5>
            <h5>Reviews</h5>
          </div>
          <div className="f-sec">
            <h3>Legal</h3>
            <h5>Privacy Policy</h5>
            <h5>Terms & Condition</h5>
          </div>
          <div className="f-sec">
            <h3>Social</h3>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} className="i-s" />
              <FontAwesomeIcon icon={faYoutube} className="i-s" />
              <FontAwesomeIcon icon={faLinkedinIn} className="i-s" />
              <FontAwesomeIcon icon={faInstagram} className="i-s" />
            </div>
          </div>
        </div>
        <div className="footer-sec3">
          <h1>
            LAIBA {""} <span className="span">AMD.</span>
          </h1>
          <p>© 2025 Laiba Ahmed. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
