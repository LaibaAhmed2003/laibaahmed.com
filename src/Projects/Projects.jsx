import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Projects = () => {
  const framesRef = useRef([]); // To keep references to each frame

  useEffect(() => {
    const observerOptions = {
      root: null, // Observing within the viewport
      threshold: 0.5, // Trigger when 50% of the frame is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-frame");
        } else {
          entry.target.classList.remove("active-frame");
        }
      });
    }, observerOptions);

    // Observe each frame
    framesRef.current.forEach((frame) => observer.observe(frame));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="Projects-container" id="projects">
        <h2>
          I work w/ forward-thinking, consumer-friendly{" "}
          <span style={{ color: "#cef5a4" }}>DTC brands.</span>
        </h2>
        <p>
          In addition to my offering, I have developed a comprehensive suite of
          tools aimed at helping my clients identify their top customers and
          reduce friction, enabling them to deliver exceptional,
          customer-focused experiences that drive repeat business.
        </p>
        <div className="projects">
          {/* Project 1 */}
          <div className="p-frame1" ref={(el) => (framesRef.current[0] = el)}>
            <div className="part1">
              <h4>Shopify</h4>
              <h4>Duration - 2 Weeks</h4>
            </div>
            <div className="part2">
              <h5>Tata Harper Skincare</h5>
              <div className="project-links">
                <p>
                  <span className="links-span">E-commerce , Shopify </span> .
                  2024
                </p>

                <p>
                  <Link to="https://tataharperskincare.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="link-icon"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-frame2" ref={(el) => (framesRef.current[1] = el)}>
            <div className="part1">
              <h4>Shopify</h4>
              <h4>Duration - 1 month</h4>
            </div>
            <div className="part2">
              <h5>Victoria Beckham</h5>
              <div className="project-links">
                <p>
                  <span className="links-span">E-commerce , Shopify </span> .
                  2024
                </p>
                <p>
                  <Link to="https://victoriabeckhambeauty.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="link-icon"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-frame3" ref={(el) => (framesRef.current[2] = el)}>
            <div className="part1">
              <h4>Shopify</h4>
              <h4>Duration - 3 weeks</h4>
            </div>
            <div className="part2">
              <h5>Silk and Willow</h5>
              <div className="project-links">
                <p>
                  <span className="links-span">E-commerce , Shopify </span> .
                  2024
                </p>
                <p>
                  <Link to="https://www.silkandwillow.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="link-icon"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="p-frame4" ref={(el) => (framesRef.current[3] = el)}>
            <div className="part1">
              <h4>Shopify</h4>
              <h4>Duration - 2 weeks</h4>
            </div>
            <div className="part2">
              <h5>Velasca</h5>
              <div className="project-links">
                <p>
                  <span className="links-span">E-commerce , Shopify </span> .
                  2024
                </p>
                <p>
                  <Link to="https://www.velasca.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="link-icon"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="p-frame5" ref={(el) => (framesRef.current[4] = el)}>
            <div className="part1">
              <h4>Shopify</h4>
              <h4>Duration - 1.5 months</h4>
            </div>
            <div className="part2">
              <h5>Mejuri</h5>
              <div className="project-links">
                <p>
                  <span className="links-span">E-commerce , Shopify </span> .
                  2024
                </p>
                <p>
                  <Link to="https://mejuri.com/world/en/?" target="_blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      className="link-icon"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <div className="button">
            <div className="btn">
              <h3>View my work</h3>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
