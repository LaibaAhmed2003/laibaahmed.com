// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faBars,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import "./navbar.css";
// import Banner from "../Banner/Banner.jsx";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

//   return (
//     <>
//       <Banner />
//       <div className="navbar-container">
//         <div className="logo">
//           <h1>
//             LAIBA <span className="span">AMD.</span>
//           </h1>
//         </div>
//         {/* Menu Icon */}
//         <FontAwesomeIcon
//           icon={menuOpen ? faTimes : faBars}
//           className="menu-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//         {/* Nav Links */}
//         <div className={`navlinks-container ${menuOpen ? "open" : ""}`}>
//           <Link to="/" className="navlinks" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>
//           <Link
//             smooth
//             to="#projects"
//             className="navlinks"
//             onClick={() => setMenuOpen(false)}
//           >
//             E-Commerce Websites
//           </Link>
//           <Link
//             to="#footer"
//             className="navlinks"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//         {/* Button */}
//         <div className="button-container">
//           <div className="button">
//             <div className="btn">
//               <Link
//                 to="https://calendly.com/laiba-sabahat9/15-min?month=2025-01"
//                 target="_blank"
//                 className="navlinks"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <h3 className="h3">Get Started</h3>
//               </Link>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Banner from "../Banner/Banner.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <>
      <Banner />
      <div className="navbar-container">
        <div className="logo">
          <h1>
            LAIBA <span className="span">AMD.</span>
          </h1>
        </div>
        {/* Menu Icon */}
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* Nav Links */}
        <div className={`navlinks-container ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="navlinks" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            smooth
            to="#projects"
            className="navlinks"
            onClick={() => setMenuOpen(false)}
          >
            E-Commerce Websites
          </Link>
          <Link
            smooth
            to="#footer"
            className="navlinks"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        {/* Button */}
        <div className="button-container">
          <div className="button">
            <div className="btn">
              <Link
                to="https://calendly.com/laiba-sabahat9/15-min?month=2025-01"
                target="_blank"
                className="navlinks"
                onClick={() => setMenuOpen(false)}
              >
                <h3 className="h3">Get Started</h3>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
