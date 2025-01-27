import "./project-desc.css";
import tata from "../images/tata1.png";

const Projectdesc = () => {
  return (
    <>
      <div className="projectdes-main-container" id="Projectdesc">
        <div className="project-image">
          {/* <video /> */}
          <img src={tata} alt="" />
        </div>
        <div className="project-content">
          <div className="project-f-content">
            <div className="client-del">
              <h2>Client Name</h2>
              <h3>Jennifer barnett</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ullam. Aliquam iure veritatis labore ex perspiciatis, ipsum
              laboriosam vero culpa? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, ullam. Aliquam iure veritatis labore
              ex perspiciatis, ipsum laboriosam vero culpa? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sapiente, ullam. Aliquam
              iure veritatis labore ex perspiciatis, ipsum laboriosam vero
              culpa?
            </p>
          </div>
          <div className="project-f-content">
            <div className="client-del">
              <h2>Challenges in Project</h2>
              <h3>Store Management</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ullam. Aliquam iure veritatis labore ex perspiciatis, ipsum
              laboriosam vero culpa? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, ullam. Aliquam iure veritatis labore
              ex perspiciatis, ipsum laboriosam vero culpa? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sapiente, ullam. Aliquam
              iure veritatis labore ex perspiciatis, ipsum laboriosam vero
              culpa?
            </p>
          </div>
          <div className="project-f-content">
            <div className="client-del">
              <h2>Duration of Project</h2>
              <h3>10 - 12 Days</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ullam. Aliquam iure veritatis labore ex perspiciatis, ipsum
              laboriosam vero culpa? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, ullam. Aliquam iure veritatis labore
              ex perspiciatis, ipsum laboriosam vero culpa? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sapiente, ullam. Aliquam
              iure veritatis labore ex perspiciatis, ipsum laboriosam vero
              culpa?
            </p>
          </div>
        </div>
        <div className="project-gallery">
          <div className="project-ga-one">
            <img src={tata} alt="" width="90" height="170" />
            <img src={tata} alt="" width="200" height="150" />
            <div>
              <img src={tata} alt="" width="300" height="300" />
            </div>
          </div>

          <div className="project-ga-two">
            <img src={tata} alt="" width="600" height="450" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Projectdesc;
