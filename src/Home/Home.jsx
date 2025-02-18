import "./Home.css";
import Hero from "../Hero/hero.jsx";

import Shouldhave from "../Shouldhave/Shouldhave.jsx";
import Services from "../Services/Services.jsx";
import Results from "../Results/Results.jsx";
import Projects from "../Projects/Projects.jsx";
import Benefits from "../Benefits/Benefits.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import FAQ from "../howitworks/FAQs.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Hero />

        <Shouldhave />
        <Services />
        <Results />
        <Projects />
        <Benefits />
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};
export default Home;
