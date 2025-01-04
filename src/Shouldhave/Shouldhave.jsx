import "./Shouldhave.css";
import websitean from "../videos/web-icon.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Shouldhave = () => {
  const scrollSections = (direction) => {
    const container = document.querySelector(".should-smallsec");
    if (direction === "left") {
      container.scrollBy({ left: -320, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const sections = [
    {
      img: websitean,
      title: "Custom Web Design",
      description:
        "Your website should reflect your brand's personality and captivate visitors with a unique design.",
    },
    {
      img: websitean,
      title: "Mobile Optimization",
      description:
        "Ensure your website looks great and functions flawlessly on every device, especially mobile.",
    },
    {
      img: websitean,
      title: "SEO Integration",
      description:
        "Rank higher on search engines with SEO-friendly structures and strategies built into your site.",
    },
    {
      img: websitean,
      title: "Lightning Fast Speed",
      description:
        "Slow websites lose visitors. We optimize performance for the fastest loading experience.",
    },
    {
      img: websitean,
      title: "User-Friendly Navigation",
      description:
        "Simplify your website's navigation to enhance user experience and improve engagement.",
    },
    {
      img: websitean,
      title: "Secure & Reliable",
      description:
        "Your site will be equipped with the latest security features to keep your data safe.",
    },
  ];

  return (
    <>
      <div className="shouldhave-container">
        <h2 className="should-head">
          {/* Proper good <span style={{ color: "#cef5a4" }}> websites </span> that
          make you money */}
          Proper good <span className="underline">websites</span> that make you{" "}
          <span className="circle-text">money</span>
        </h2>

        <div className="should-smallsec services-mask w-slider-mask">
          {sections.map((section, index) => (
            <div className="sec w-slide" key={index}>
              <img className="sec-vid" src={section.img} alt={section.title} />
              <h4>{section.title}</h4>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className="navigation-arrows">
          <button onClick={() => scrollSections("left")} className="arrow-left">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => scrollSections("right")}
            className="arrow-right"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Shouldhave;