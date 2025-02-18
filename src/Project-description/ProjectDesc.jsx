import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./project-desc.css"; // Ensure you have a separate CSS file for the project description

// Importing images for each project
import tataharperImage from "../images/tatahome.png";
import victoriabeckhamImage from "../../src/images/victoria1.png";
import silkandwillowImage from "../images/silkandwillow1.png";
import velascaImage from "../images/velasca.png";

import tatavideo from "../videos/client-videos/tatavideo.mp4";
import silkvideo from "../videos/client-videos/silkandwillow -video.mp4";
import velaskavideo from "../videos/client-videos/velasca-video.mp4";
import vbvideo from "../videos/client-videos/victoria-video.mp4";
import Footer from "../Footer/Footer.jsx";

const ProjectDesc = () => {
  const { projectName } = useParams(); // Retrieve project name from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    console.log("Project Name:", projectName); // Log to check if it's getting the correct value
    const projectData = {
      tataharper: {
        title: "Tata Harper Skincare",
        clientname: "Tata Harper Team",
        description:
          "A high-end Shopify-based e-commerce platform specializing in luxurious skincare products, designed to provide an exceptional shopping experience. The project focused on seamless navigation and an optimized product display, particularly for a sophisticated clientele..",
        tech: "Shopify, Liquid, Custom Integrations",
        duration: "3 Weeks",
        challengesbullets: "Mobile optimization, Checkout issues",
        challenges:
          "Optimizing product pages for mobile devices while ensuring a smooth, intuitive checkout process that reflected the luxury nature of the brand.",
        outcomebullets: "30% sales boost, Increased engagement",
        outcome:
          "The site experienced a 30% increase in sales within the first month of launch, contributing to an enhanced online presence and customer loyalty.",
        image: tataharperImage,
        video: tatavideo,
      },
      victoriabeckham: {
        title: "Victoria Beckham Beauty",
        clientname: "Victoria Beckham",
        description:
          "A refined Shopify store that highlights Victoria Beckham’s luxury beauty products, with a focus on blending aesthetics and functionality for a top-tier shopping experience. The design was carefully curated to reflect the brand's elegance and sophistication while offering seamless usability.",
        tech: "Shopify, Liquid, Custom Theme Development",
        duration: "3 Weeks",
        challengesbullets: "Brand alignment, Functionality vs. style",
        challenges:
          "Ensuring that the website aligned with Victoria Beckham’s high-end brand image, while maintaining robust functionality and user experience without compromising on style.",
        outcomebullets: "High engagement, Minimal bounce rate",
        outcome:
          "The website was successfully launched, with high customer engagement and a minimal bounce rate, resulting in increased brand presence in the digital marketplace.",
        image: victoriabeckhamImage,
        video: vbvideo,
      },
      silkandwillow: {
        title: "Silk and Willow",
        clientname: "Shellie Pomeroy",
        description:
          "A premium Shopify store for luxury silk bedding and home decor products, focusing on high-quality craftsmanship and elegant designs. The e-commerce platform was created to offer a smooth and premium experience for a sophisticated customer base.",
        tech: "Shopify, Liquid, Custom Integrations",
        duration: "4 Weeks",
        challengesbullets: "System migration, Data integrity",
        challenges:
          "Migrating from an outdated system to Shopify, ensuring all product information, customer data, and orders transitioned smoothly, without any data loss or disruption to the user experience.",
        outcomebullets: "40% performance increase, Better user experience",
        outcome:
          "Following the migration and launch, site performance improved by 40%, and the business saw an increase in customer satisfaction due to better navigation and a more engaging shopping experience.",
        image: silkandwillowImage,
        video: silkvideo,
      },
      velasca: {
        title: "Velasca",
        clientname: "Andrea Cavalleri",
        description:
          "A sleek Shopify-powered platform for showcasing and selling handmade shoes, aimed at providing global reach for the brand. The design emphasizes clear product photography and easy navigation, ensuring an elevated shopping experience for international customers.",
        tech: "Shopify, Liquid, Custom Integrations",
        duration: "3 Weeks",
        challengesbullets: "Payment gateway, Currency handling",
        challenges:
          "Developing a custom payment gateway to ensure smooth international transactions, accommodating multiple currencies and payment options.",
        outcomebullets: "50% sales growth, Smooth checkout",
        outcome:
          "The international sales increased by 50%, with the custom payment integration enabling smooth global transactions and contributing to the company’s global expansion.",
        image: velascaImage,
        video: velaskavideo,
      },
    };

    // Check if the project exists in projectData
    if (projectData[projectName]) {
      setProject(projectData[projectName]);
    } else {
      console.error("Project not found.");
    }
  }, [projectName]);

  if (!project) {
    return <div>Loading...</div>; // You can display an error message here if project not found
  }

  return (
    <div className="project-desc-container">
      <div className="project-image">
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          width="90%"
          height="auto"
        ></video>

        {/* <img src={project.image} alt={project.title} /> */}
      </div>
      <div className="project-content">
        <h2 className="heading">{project.title}</h2>
        <div className="project-f-content">
          <div className="client-del">
            <h2>Client Name</h2>
            <h3>{project.clientname}</h3>
          </div>
          <div className="client-del-part2">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="project-f-content">
          <div className="client-del">
            <h2>Challenges in Project</h2>
            <h3>{project.challengesbullets}</h3>
          </div>
          <div className="client-del-part2">
            <p>{project.challenges}</p>
          </div>
        </div>

        <div className="project-f-content">
          <div className="client-del">
            <h2>Duration of Project</h2>
            <h3>{project.duration}</h3>
          </div>
          <div className="client-del-part2">
            <p>{project.duration}</p>
          </div>
        </div>

        <div className="project-f-content">
          <div className="client-del">
            <h2>Outcome</h2>
            <h3>{project.outcomebullets}</h3>
          </div>
          <div className="client-del-part2">
            <p>{project.outcome}</p>
          </div>
        </div>
      </div>

      <div className="project-gallery">
        <div className="project-ga-one">
          <img src={project.image} alt="Project 1" width="90" height="170" />
          <img src={project.image} alt="Project 2" width="200" height="150" />
          <div>
            <img src={project.image} alt="Project 3" width="300" height="300" />
          </div>
        </div>

        <div className="project-ga-two">
          <img
            src={project.image}
            alt="Project Full"
            width="600"
            height="450"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDesc;
