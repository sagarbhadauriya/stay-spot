import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/D15jnmG/law-gate.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Law Gate</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/8jbsJvk/phgwara.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Phagwara</h1>
          <h2>10 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/jT7kZSw/jalandhar.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jalandhar</h1>
          <h2>5 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
