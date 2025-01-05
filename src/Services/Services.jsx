// import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faStore,
//   faPalette,
//   faToolbox,
// } from "@fortawesome/free-solid-svg-icons";

// const Services = () => {
//   return (
//     <>
//       <div className="Services-container" id="services">
//         <div className="ser-part1">
//           <h5>Website Services</h5>
//           <h2>
//             <span style={{ color: "#cef5a4" }}> Websites</span> are what I do
//           </h2>
//           <p>
//             It's never a 'one size fits all' approach when it comes to websites,
//             so I offer various services to suit all needs.
//           </p>
//           <div className="serbtn-container">
//             <div className="button-container">
//               <div className="button">
//                 <div className="btn">
//                   <h3>I've seen enough</h3>
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="ser-part2">
//           <div className="main-service">
//             <FontAwesomeIcon icon={faStore} className="ser-icon" />
//             <h3>Shopify Store Development</h3>
//             <p>
//               Build a robust, user-friendly Shopify store tailored to your brand
//               and audience.
//             </p>
//             <div className="btn-con">
//               <button className="arrow-right">
//                 <FontAwesomeIcon className="arr" icon={faArrowRight} />
//               </button>
//               <p className="btn-text">Take a look</p>
//             </div>
//           </div>

//           <div className="main-service">
//             <FontAwesomeIcon icon={faPalette} className="ser-icon" />
//             <h3>Liquid Theme Development</h3>
//             <p>
//               Create stunning, responsive Shopify themes using Liquid to reflect
//               your brand identity perfectly.
//             </p>
//             <div className="btn-con">
//               <button className="arrow-right">
//                 <FontAwesomeIcon className="arr" icon={faArrowRight} />
//               </button>
//               <p className="btn-text">Take a look</p>
//             </div>
//           </div>

//           <div className="main-service">
//             <FontAwesomeIcon icon={faToolbox} className="ser-icon" />
//             <h3>Shopify Store Maintenance</h3>
//             <p>
//               Regular updates, bug fixes, and optimizations to ensure your store
//               runs smoothly.
//             </p>
//             <div className="btn-con">
//               <button className="arrow-right">
//                 <FontAwesomeIcon className="arr" icon={faArrowRight} />
//               </button>
//               <p className="btn-text">Take a look</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStore,
  faPalette,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="Services-container" id="services">
        <div className="ser-part1">
          <h5>Website Services</h5>
          <h2>
            <span style={{ color: "#cef5a4" }}>Websites</span> are what I do
          </h2>
          <p>
            It's never a 'one size fits all' approach when it comes to websites,
            so I offer various services to suit all needs.
          </p>
          <div className="serbtn-container">
            <div className="button-container">
              <div className="button">
                <div className="btn">
                  <h3>I've seen enough</h3>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ser-part2">
          <div className="main-service">
            <FontAwesomeIcon icon={faStore} className="ser-icon" />
            <h3>Shopify Store Development</h3>
            <p>
              Build a robust, user-friendly Shopify store tailored to your brand
              and audience.
            </p>
            <div className="btn-con">
              <button className="arrow-right" aria-label="Take a look">
                <FontAwesomeIcon className="arr" icon={faArrowRight} />
              </button>
              <span className="btn-text">Take a look</span>
            </div>
          </div>

          <div className="main-service">
            <FontAwesomeIcon icon={faPalette} className="ser-icon" />
            <h3>Liquid Theme Development</h3>
            <p>
              Create stunning, responsive Shopify themes using Liquid to reflect
              your brand identity perfectly.
            </p>
            <div className="btn-con">
              <button className="arrow-right" aria-label="Take a look">
                <FontAwesomeIcon className="arr" icon={faArrowRight} />
              </button>
              <span className="btn-text">Take a look</span>
            </div>
          </div>

          <div className="main-service">
            <FontAwesomeIcon icon={faToolbox} className="ser-icon" />
            <h3>Shopify Store Maintenance</h3>
            <p>
              Regular updates, bug fixes, and optimizations to ensure your store
              runs smoothly.
            </p>
            <div className="btn-con">
              <button className="arrow-right" aria-label="Take a look">
                <FontAwesomeIcon className="arr" icon={faArrowRight} />
              </button>
              <span className="btn-text">Take a look</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
