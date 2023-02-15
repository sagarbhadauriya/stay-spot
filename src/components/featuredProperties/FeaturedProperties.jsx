import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://i.ibb.co/Xx4mjXH/Screenshot-20230215-012126-Whats-App-Business.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">3 Star Rooms</span>
        <span className="fpCity">Phagwara</span>
        <span className="fpPrice">7000/month</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.ibb.co/TmdL68b/Screenshot-20230215-012047-Whats-App-Business.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Law Gate</span>
        <span className="fpPrice">10000/month</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.ibb.co/WzXyF3v/Screenshot-20230215-012024-Whats-App-Business.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Law Gate</span>
        <span className="fpPrice">9000/month</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.ibb.co/h7cNYkg/Screenshot-20230215-011920-Whats-App-Business.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Phagwara</span>
        <span className="fpPrice">8000/month</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
