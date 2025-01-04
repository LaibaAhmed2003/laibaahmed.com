import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";

const FAQs = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  const toggleContent = (questionNumber) => {
    setShowContent1(questionNumber === 1 ? !showContent1 : false);
    setShowContent2(questionNumber === 2 ? !showContent2 : false);
    setShowContent3(questionNumber === 3 ? !showContent3 : false);
    setShowContent4(questionNumber === 4 ? !showContent4 : false);
    setShowContent5(questionNumber === 5 ? !showContent5 : false);
  };

  return (
    <div className="FAQ-container" id="faqs">
      <div className="FAQ-sess1">
        <h2 className="second-heading">Find answers to your needs</h2>
        <p className="p-tag">
          Unlock your online store’s full potential with my expert guidance. I
          can address all your questions and challenges. Let’s collaborate to
          elevate your business to new heights.
        </p>
        <div className="button-container">
          <div className="button">
            <div className="btn">
              <h3>Contact ME</h3>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="FAQ-sess2">
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">01. Who am I?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(1)}
            />
          </div>
          {showContent1 && (
            <p>
              Hi, I'm Laiba Ahmed! I’m an e-commerce and Shopify expert with a
              passion for helping businesses grow online. I work with platforms
              like Shopify, WordPress, Webflow, and Squarespace to create custom
              websites that fit each business’s needs. My goal is to make your
              online store easy to use, boost engagement, and help you make more
              sales. Let’s work together to take your business to the next
              level!
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              02. Looking to unlock the full potential of your online business?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(2)}
            />
          </div>
          {showContent2 && (
            <p>
              Definitely! Whether you’re using WordPress, Shopify, Webflow, or
              Squarespace, I offer a range of services to enhance your digital
              presence. From custom web design and e-commerce optimization to
              seamless user experiences and automation, I can help you scale
              your online business and reach its full potential.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              03. How fast will I receive my store?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(3)}
            />
          </div>
          {showContent3 && (
            <p>
              On average, complete store design and development takes 8-10
              weeks. However, more complex requests can take longer.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">
              04. How will design and develop my store?
            </h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(4)}
            />
          </div>

          {showContent4 && (
            <p>
              I’ll design and build your store to fit your brand and goals.
              We’ll start by discussing what you need, and then I’ll create a
              simple, easy-to-use design that looks great on all devices. Using
              Shopify, I’ll make sure everything works smoothly, from adding
              products to setting up secure payments, so your store is ready to
              attract customers and help you grow your business.
            </p>
          )}
        </div>
        <div className="question">
          <div className="heading-arrow">
            <h3 className="faq-heading">05. What if I don't like the store?</h3>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="arrow-down"
              onClick={() => toggleContent(5)}
            />
          </div>

          {showContent5 && (
            <p>
              No worries! I’ll continue to revise the work until you’re 100%
              satisfied.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
