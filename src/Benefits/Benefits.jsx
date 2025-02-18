import "./Benefits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faTruckFast,
  faClock,
  faDiamond,
  faInfinity,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <>
      <div className="benefits-container">
        <h2>
          Benefits to <span style={{ color: "#cef5a4" }}>join me</span>
        </h2>

        <p style={{ color: "rgb(196, 195, 195)" }}>
          Perks so good you’ll never need to go anywhere else. Seriously!
        </p>
        <div className="perks-container">
          <div className="perk">
            <h6>01</h6>
            <FontAwesomeIcon icon={faCreditCard} className="perk-icon" />
            <h3>Buy a plan</h3>
            <p>
              Choose a plan that fits your needs, and watch us create magic.
            </p>
          </div>
          <div className="perk">
            <h6>02</h6>
            {/* <FontAwesomeIcon icon={faCreditCard} className="perk-icon" /> */}
            <FontAwesomeIcon icon={faTruckFast} className="perk-icon" />
            <h3>Lightning fast delivery</h3>
            <p>
              Receive lightning-fast design and development delivery in just a
              few days.
            </p>
          </div>
          <div className="perk">
            <h6>03</h6>
            <FontAwesomeIcon icon={faClock} className="perk-icon" />
            <h3>Limited Time</h3>
            <p>Grab 30% off on all services. Offer ends on 15 March!</p>
          </div>

          <div className="perk">
            <h6>04</h6>
            <FontAwesomeIcon icon={faDiamond} className="perk-icon" />
            <h3>Top-notch quality</h3>
            <p>
              Insane design quality at your fingertips whenever you need it.
            </p>
          </div>
          <div className="perk">
            <h6>05</h6>
            <FontAwesomeIcon icon={faInfinity} className="perk-icon" />
            <h3>Flexible and scalable</h3>
            <p>Scale up or down as needed.</p>
          </div>
          <div className="perk">
            <h6>06</h6>
            <FontAwesomeIcon icon={faFingerprint} className="perk-icon" />
            <h3>Unique and all yours</h3>
            <p>
              Each store’s design and development is crafted exclusively for you
              and remains 100% yours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
