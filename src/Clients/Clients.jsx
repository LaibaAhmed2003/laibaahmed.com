import "./Clients.css";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import client5 from "../images/client5.png";
import tatalogo from "../images/tatalogo.png";
import vblogo from "../images/vblogo.png";
import velaskalogo from "../images/velaskalogo.png";

const Clients = () => {
  return (
    <div className="clients-bg">
      <div className="clients-container">
        <div className="small-head">
          Trusted by <span>leading</span> small businesses
        </div>
        <div className="client-sec">
          {/* Original images */}
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={velaskalogo} alt="Client 3" />
          <img src={tatalogo} alt="Client 4" />
          <img src={vblogo} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={client3} alt="Client 3" />
          <img src={client4} alt="Client 4" />
          <img src={client5} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={client3} alt="Client 3" />
          <img src={client4} alt="Client 4" />
          <img src={client5} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={client3} alt="Client 3" />
          <img src={client4} alt="Client 4" />
          <img src={client5} alt="Client 5" />

          {/* Duplicate images for seamless scrolling */}
          <img src={client1} alt="Client 1" />
          <img src={client2} alt="Client 2" />
          <img src={client3} alt="Client 3" />
          <img src={client4} alt="Client 4" />
          <img src={client5} alt="Client 5" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
