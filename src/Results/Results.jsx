import "./Results.css";

const Results = () => {
  return (
    <>
      <div className="results-container">
        <h2>
          Getting <span style={{ color: "#cef5a4" }}> results </span> for
          businesses like yours
        </h2>
        <div className="all-results">
          <div className="results-dec">
            <div className="num">
              <span className="span"></span>500
              <span className="span">+</span>
            </div>
            <p>Websites built</p>
          </div>

          <div className="results-dec">
            <div className="num">
              <span className="span"></span>9,000
              <span className="span">+</span>
            </div>
            <p>Enquiries generated</p>
          </div>

          <div className="results-dec">
            <div className="num">
              <span className="span">$</span>12,000
              <span className="span">+</span>
            </div>
            <p>Sales generated for partners</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Results;
