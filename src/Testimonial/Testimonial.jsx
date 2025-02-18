import "./testimonial.css";
import noura from "../images/Clients/Noura.jpg";
import andrew from "../images/Clients/andrew.jpg";
import mike from "../images/Clients/Mike_Gettis.png";
import victoria from "../images/Clients/victoria.avif";
import shelly from "../images/Clients/shelly.jpg";

const Testimonial = () => {
  return (
    <div className="Testimonial-container" id="testimonial">
      <h2 className="head">
        {" "}
        <span style={{ color: "#cef5a4" }}>Client testimonials,</span> real
        voices heard
      </h2>
      <p className="des">
        Read what my satisfied clients have to say about their experience with
        services.
      </p>
      <div className="testimonials">
        <div className="test">
          <h2>Sales skyrocketed after the redesign!</h2>
          <p>
            ”Laiba's expertise in Shopify theme design completely transformed my
            store. She understood my brand vision and delivered a sleek,
            high-converting design. The user experience is now seamless, and
            sales have increased. Highly recommended!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={andrew} alt="" />
            </div>
            <div className="client-name">
              <h3>Andrea Cavalleri</h3>
              <h4 className="profession">
                Founder of Velasca Italian footwear brand
              </h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>An investment that paid off!</h2>
          <p>
            ”Working with Laiba was an absolute pleasure. She revamped my
            Shopify store with a custom theme that not only looks stunning but
            also functions flawlessly. She’s a true professional who knows
            eCommerce inside out.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={victoria} alt="" />
            </div>
            <div className="client-name">
              <h3>Victoria Beckham</h3>
              <h4 className="profession">Founder of Victoria Beckham Beauty</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>The results were absolutely shocking.</h2>
          <p>
            ”Laiba’s Shopify theme design brought a fresh, modern look to my
            store. She optimized every detail, ensuring a smooth shopping
            experience. The results? More engagement, higher conversion rates,
            and happy customers!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={shelly} alt="" />
            </div>
            <div className="client-name">
              <h3>Shellie Pomeroy</h3>
              <h4 className="profession">Founder of Silk and Willow</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>11/10 – Would Recommend!</h2>
          <p>
            ”Laiba is incredibly talented! She designed a Shopify theme that
            perfectly matches my brand aesthetic while improving site speed and
            usability. The attention to detail and seamless communication made
            the process stress-free.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={mike} alt="" />
            </div>
            <div className="client-name">
              <h3>Mike Gettis</h3>
              <h4 className="profession">Founder of Endy</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Worth Every Penny!</h2>
          <p>
            ”Laiba’s Shopify theme work made my store stand out from the
            competition. The layout, design, and navigation are all optimized
            for conversions. If you need a Shopify expert, she’s the one!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={noura} alt="" />
            </div>
            <div className="client-name">
              <h3>Noura Sakkijha</h3>
              <h4 className="profession">Founder of Mejuri</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
