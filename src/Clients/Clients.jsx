import "./Clients.css";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import client5 from "../images/client5.png";
import tatalogo from "../images/my logos/tataharper.png";
import vblogo from "../images/my logos/vitoriabeckham.png";
import velaskalogo from "../images/my logos/velasca.png";
import cettire from "../images/my logos/cettire.png";
import endy from "../images/my logos/endy.png";

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
