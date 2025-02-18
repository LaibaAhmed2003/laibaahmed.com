import "./Clients.css";
import tatalogo from "../../src/images/my logos/tataharper.png";
import vblogo from "../../src/images/my logos/vitoriabeckham.png";
import velaskalogo from "../../src/images/my logos/velasca.png";
import cettire from "../../src/images/my logos/cettire.png";
import endy from "../../src/images/my logos/endy.png";

const Clients = () => {
  return (
    <div className="clients-bg">
      <div className="clients-container">
        <div className="small-head">
          Trusted by <span>leading</span> small businesses
        </div>
        <div className="client-sec">
          {/* Original images */}
          <img src={cettire} alt="Client 1" />
          <img src={endy} alt="Client 2" />
          <img src={velaskalogo} alt="Client 3" />
          <img src={tatalogo} alt="Client 4" />
          <img src={vblogo} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={cettire} alt="Client 1" />
          <img src={endy} alt="Client 2" />
          <img src={velaskalogo} alt="Client 3" />
          <img src={tatalogo} alt="Client 4" />
          <img src={vblogo} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={cettire} alt="Client 1" />
          <img src={endy} alt="Client 2" />
          <img src={velaskalogo} alt="Client 3" />
          <img src={tatalogo} alt="Client 4" />
          <img src={vblogo} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={cettire} alt="Client 1" />
          <img src={endy} alt="Client 2" />
          <img src={velaskalogo} alt="Client 3" />
          <img src={tatalogo} alt="Client 4" />
          <img src={vblogo} alt="Client 5" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
