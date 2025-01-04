import "./testimonial.css";
import Martin from "../images/Clients/Martin.png";
import Andrew from "../images/Clients/Andrew.png";
import Matheas from "../images/Clients/Matheas.png";
import Selva from "../images/Clients/selva.png";
import karl from "../images/Clients/karl.jpg";
import Isabella from "../images/Clients/Isabell.jpg";
import Dan from "../images/Clients/Dan.jpg";
import Laura from "../images/Clients/Laura.jpg";
import Werner from "../images/Clients/Werner.jpg";
import sidra from "../images/Clients/sidrasaleem.jpg";
import laiba from "../images/Clients/laiba.jpg";
import aliaslam from "../images/Clients/aliaslam.jpg";

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
          <h2>A total win-win.</h2>
          <p>
            ”Thanks to EvolveByte, I finally understand what Facebook is all
            about. The team is incredibly hardworking, always friendly, patient,
            and always ready to help. Although I live in Germany and only supply
            the German market, we have been able to achieve a lot together so
            far. Thank you, EvolveByte.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Martin} alt="" />
            </div>
            <div className="client-name">
              <h3>Martin</h3>
              <h4 className="profession">Founder of Cashmere Stories</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>My go to for all things LinkedIn.</h2>
          <p>
            ”EvolveByte is an amazing talent. If you are looking for top-quality
            work that exceeds your expectations, then EvolveByte is your go-to
            team. They deliver the most professional standards. Very
            knowledgeable, thoughtful, and genuinely nice to work with. Thank
            you, EvolveByte!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Andrew} alt="" />
            </div>
            <div className="client-name">
              <h3>Andrew</h3>
              <h4 className="profession">CEO of Ainvent</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>The results were absolutely shocking.</h2>
          <p>
            ”I worked with EvolveByte for content creation. They worked very
            thoroughly and structured, acted fast on reiterations, and were
            welcoming of feedback. EvolveByte did an amazing job for us, and I
            would recommend their copywriting skills to anyone looking for a
            professional, communicative, and fun team to work with. Well done!
            Will work again with EvolveByte in the future.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Matheas} alt="" />
            </div>
            <div className="client-name">
              <h3>Matthias Plancke</h3>
              <h4 className="profession">Co-Founder of FlyingToucan</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>11/10 – Would Recommend!</h2>
          <p>
            ”EvolveByte's unique ideas and execution have transformed the way we
            present our brand online. Their dedication, creativity, and
            expertise have made all the difference. Highly recommended to anyone
            looking for exceptional results! “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={karl} alt="" />
            </div>
            <div className="client-name">
              <h3>Karl Hall</h3>
              <h4 className="profession">Founder of KarlHall Fitness</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Worth Every Penny!</h2>
          <p>
            ”I have used the services of many talented service providers and
            have been very happy with the results. However, EvolveByte is truly
            exceptional in every way. They are so professional,
            customer-oriented, and provide exceptional advice and service to
            meet customer requirements. I am very happy I found them and shall
            definitely use their services again.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Selva} alt="" />
            </div>
            <div className="client-name">
              <h3>Selva</h3>
              <h4 className="profession">Founder of Vibrant Life</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Perfectly Done!</h2>
          <p>
            ”EvolveByte optimized my LinkedIn profile and created a landing page
            for me. I absolutely loved working with them. They were quick to
            respond and always followed up on all my requests. I am extremely
            satisfied with the results and can already see that the audience on
            my page is more targeted.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Isabella} alt="" />
            </div>
            <div className="client-name">
              <h3>Isabella Kosch</h3>
              <h4 className="profession">Head of GBS Service Management</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Took All My Worries Away!</h2>
          <p>”great working system, very organised and timely :)“</p>
          <div className="test-items">
            <div className="image">
              <img src={Dan} alt="" />
            </div>
            <div className="client-name">
              <h3>Dan Barry</h3>
              <h4 className="profession">Founder at Ad Sales as a Service</h4>
            </div>
          </div>
        </div>

        <div className="test laura">
          <h2>Like They Read My Mind!</h2>
          <p>
            ”EvolveByte is an amazing LinkedIn lead generation company and so
            easy to work with! They collaborate with you to come up with the
            best strategies and communicate clearly what they will provide. And
            then they deliver excellent results! They will also complete your
            project within the time frame they promised. The team at EvolveByte
            has a professional and approachable demeanor, and I’m happy to have
            found them. They have a strong team that supports them in delivering
            your project. I'm completely satisfied with the work they did for me
            and will continue working with them on future projects. I highly
            recommend them!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Laura} alt="" />
            </div>
            <div className="client-name">
              <h3>Laura Enzor</h3>
              <h4 className="profession">Reinvention Coach For Women</h4>
            </div>
          </div>
        </div>

        <div className="test laura">
          <h2>Exactly What I Needed!</h2>
          <p>
            ”EvolveByte recently crafted a remarkable video script for one of my
            clients. Their expertise as a copywriter truly shone through in the
            work, and I couldn't have been more impressed with the results. I
            was particularly impressed with EvolveByte's creative approach to
            storytelling. They managed to distill complex concepts in medicine
            into clear and concise language, ensuring that the video script
            conveyed the intended information effectively. Their ability to
            balance creativity with a strong foundation in marketing principles
            made them an invaluable asset to the project. EvolveByte's
            professionalism and commitment to excellence make them a standout
            SEO copywriting service provider. I wholeheartedly recommend them to
            anyone seeking skilled copywriting services. Their talent and
            passion for their work are truly commendable. “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Werner} alt="" />
            </div>
            <div className="client-name">
              <h3>Werner Korb</h3>
              <h4 className="profession">Customer Success Manager</h4>
            </div>
          </div>
        </div>

        <div className="test laura">
          <h2>Exceeds Expectations!</h2>
          <p>
            ”EvolveByte's ability to understand my firm's target audience was
            outstanding. They recently helped me with LinkedIn content creation
            and SEO website copywriting. EvolveByte took the time to delve deep
            into my industry, asking thoughtful questions and conducting
            thorough research. Their attention to detail was evident in every
            piece of content they crafted for me. Another aspect that impressed
            me was their consistency and timely delivery. EvolveByte adhered to
            the agreed-upon schedule, consistently providing me with top-notch
            content that was ready for posting. This reliability made it
            effortless for me to plan my LinkedIn marketing strategy. “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={aliaslam} alt="" />
            </div>
            <div className="client-name">
              <h3>Ali Aslam</h3>
              <h4 className="profession">Senior Software Engineer</h4>
            </div>
          </div>
        </div>

        <div className="test laura">
          <h2>100% Satisfied!</h2>
          <p>
            ”I couldn't be happier with the results. EvolveByte has an excellent
            understanding of my business and target audience and was able to
            create copy and digital marketing strategies that perfectly aligned
            with my goals and needs. Throughout the entire process, they were
            consummate professionals, consistently delivering high-quality work
            on time and within budget. Their communication skills are top-notch,
            and they were always available to answer questions or provide
            updates. Most importantly, as digital marketing experts, EvolveByte
            has a real talent for crafting compelling copy that resonates with
            readers and drives results. Thanks to their expertise, I've seen a
            significant increase in website traffic, conversions, and overall
            engagement. “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={sidra} alt="" />
            </div>
            <div className="client-name">
              <h3>Sidra Saleem</h3>
              <h4 className="profession">Lead Generation Expert</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Million-Dollar Service!</h2>
          <p>
            ”EvolveByte proved really helpful in generating leads for one of the
            eCommerce stores managed by me. They have been influential in terms
            of communication, cooperation, and project workflow. EvolveByte also
            provided guidance on front-end web development skills, and I still
            sometimes seek their expertise. They are phenomenal and a great help
            for digital marketing and web development services. I expect to stay
            connected with them in the long run. “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={laiba} alt="" />
            </div>
            <div className="client-name">
              <h3>Laiba Ahmed</h3>
              <h4 className="profession">Senior Shopify Designer</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials testy2">
        <div className="test">
          <h2>Perfectly Done!</h2>
          <p>
            ”EvolveByte optimized my LinkedIn profile and created a landing page
            for me. I absolutely loved working with them. They were quick to
            respond and always followed up on all my requests. I am extremely
            satisfied with the results and can already see that the audience on
            my page is more targeted.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Isabella} alt="" />
            </div>
            <div className="client-name">
              <h3>Isabella Kosch</h3>
              <h4 className="profession">Head of GBS Service Management</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Took All My Worries Away!</h2>
          <p>”great working system, very organised and timely :)“</p>
          <div className="test-items">
            <div className="image">
              <img src={Dan} alt="" />
            </div>
            <div className="client-name">
              <h3>Dan Barry</h3>
              <h4 className="profession">Founder at Ad Sales as a Service</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Like They Read My Mind!</h2>
          <p>
            ”EvolveByte is an exceptional LinkedIn lead generation company. They
            collaborate effectively, communicate clearly, and deliver great
            results on time. Their professional and approachable team made the
            process easy, and I'm thrilled with the outcome. I’ll definitely
            continue working with them and highly recommend their services!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Laura} alt="" />
            </div>
            <div className="client-name">
              <h3>Laura Enzor</h3>
              <h4 className="profession">Reinvention Coach For Women</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Exactly What I Needed!</h2>
          <p>
            ”EvolveByte recently crafted an exceptional video script for one of
            my clients. Their creative approach to storytelling and ability to
            simplify complex medical concepts was impressive. Balancing
            creativity with marketing principles, they delivered clear,
            effective content. Their professionalism and commitment to
            excellence make them a standout SEO copywriting service provider. I
            highly recommend EvolveByte for skilled copywriting services.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={Werner} alt="" />
            </div>
            <div className="client-name">
              <h3>Werner Korb</h3>
              <h4 className="profession">Customer Success Manager</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Exceeds Expectations!</h2>
          <p>
            ”EvolveByte's understanding of my firm's target audience was
            outstanding. They helped with LinkedIn content creation and SEO
            website copywriting, conducting thorough research and asking
            insightful questions. Their attention to detail was evident in every
            piece of content, and their consistency and timely delivery made it
            easy to plan my LinkedIn marketing strategy. I’m impressed by their
            reliability and quality.“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={aliaslam} alt="" />
            </div>
            <div className="client-name">
              <h3>Ali Aslam</h3>
              <h4 className="profession">Senior Software Engineer</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>100% Satisfied!</h2>
          <p>
            ”I couldn't be happier with the results. EvolveByte truly
            understands my business and target audience, creating copy and
            digital marketing strategies that align with my goals. They
            delivered high-quality work on time and within budget, with
            excellent communication throughout. Their expertise in crafting
            compelling copy has led to a significant increase in website
            traffic, conversions, and engagement. I'm thrilled with the
            outcome!“
          </p>
          <div className="test-items">
            <div className="image">
              <img src={sidra} alt="" />
            </div>
            <div className="client-name">
              <h3>Sidra Saleem</h3>
              <h4 className="profession">Lead Generation Expert</h4>
            </div>
          </div>
        </div>

        <div className="test">
          <h2>Million-Dollar Service!</h2>
          <p>
            ”EvolveByte proved really helpful in generating leads for one of the
            eCommerce stores managed by me. They have been influential in terms
            of communication, cooperation, and project workflow. EvolveByte also
            provided guidance on front-end web development skills, and I still
            sometimes seek their expertise. They are phenomenal and a great help
            for digital marketing and web development services. I expect to stay
            connected with them in the long run. “
          </p>
          <div className="test-items">
            <div className="image">
              <img src={laiba} alt="" />
            </div>
            <div className="client-name">
              <h3>Laiba Ahmed</h3>
              <h4 className="profession">Senior Shopify Designer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
