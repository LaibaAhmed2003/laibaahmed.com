import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Clients from "../Clients/Clients.jsx";
const hero = () => {
  return (
    <div className="hero-container">
      <div className="sub-head">
        <h4>Shopify Development for E-Commerce Success</h4>
      </div>
      <div className="main-head">
        <h1>
          {/* Helping your business{" "}
          <span style={{ color: "#cef5a4" }}> convert </span>
          <br></br> more online  */}
          Making Your{" "}
          <span style={{ color: "#cef5a4", fontWeight: "inherit" }}>
            {" "}
            Shopify Store <br></br>
            Work{" "}
          </span>{" "}
          For You.
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
              <Link
                to="https://calendly.com/laiba-sabahat9/15-min?month=2025-01"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <h3 className="h3">Get Started</h3>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="services-container">
          <div className="services">
            <div className="btn">
              <Link smooth to="#services" style={{ textDecoration: "none" }}>
                <h3 className="h3">My Services</h3>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};
export default hero;
