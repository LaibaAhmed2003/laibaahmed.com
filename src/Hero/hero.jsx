import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Clients from "../Clients/Clients.jsx";
const hero = () => {
  return (
    <div className="hero-container">
      <div className="sub-head">
        <h4>Shopify Development for E-Commerce Success</h4>
      </div>
      <div className="main-head">
        <h1>
          Helping your business{" "}
          <span style={{ color: "#cef5a4" }}> convert </span>
          <br></br> more online
        </h1>
      </div>
      <div className="sub-text">
        <p>
          <span>Websites that get results</span> for SMEs, startups, and the
          self-employed
        </p>
      </div>
      <div className="subs">
        <div className="button-container">
          <div className="button">
            <div className="btn">
              <h3>Get Started</h3>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="services-container">
          <div className="services">
            <div className="btn">
              <h3>My Services</h3>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="getservice"></div>
      </div>
      <Clients />
    </div>
  );
};
export default hero;
