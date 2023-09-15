import React from "react";
import "./agro.css"; // Import the CSS file

const Agro = () => {
  return (
    <div className="agro-container">
        <div className="title">
             <h2>Our Work</h2>
             <div className="green-line"></div>
             <p>
                Rising atmospheric carbon is leading to global warming and disastrous climate impacts.   Microsoft’s Carbon Removal program needs our help!​
                    <br></br>
                    <br></br>
                We created a satellite imagery-powered solution to identify optimal locations for planting new agroforests, a carbon capture technique that also helps local communities realize the productive potential of their land.
                    <br></br>
                    <br></br>
                Our endeavor involved an intricate process of data integration and pixel manipulation.
                To construct this map, we meticulously sourced and compiled data from four distinct satellite imagery datasets. These datasets encompassed critical factors for agroforestry: biomass distribution, precipitation patterns, temperature variations, and subterranean carbon levels. Each of these factors was diligently weighted based on its significance and relevance to agroforestry projects.
                    <br></br>
                    <br></br>
                The concatenated map showcases the optimal locations for initiating agroforestry projects. By seamlessly overlaying and harmonizing the data from the four datasets, we have produced a map that encapsulates the ideal areas for pursuing agroforestry initiatives. This meticulously crafted map serves as a powerful tool for guiding stakeholders, environmental enthusiasts, and policy-makers toward informed decisions and actions in support of sustainable agroforestry practices.
            </p>
             <div className="green-line"></div>

      </div>
      <div className="small-images">
        <div className="image-container">
          <img src="/images/temp.png" alt="Temperature" />
          <p>Temperature</p>
        </div>
        <div className="image-container">
          <img src="/images/biomass.png" alt="Biomass" />
          <p>Biomass</p>
        </div>
        <div className="image-container">
          <img src="/images/biomassbelow.png" alt="Below Ground (soil) carbon" />
          <p>Below Ground <spann>&#40;</spann>soil<span>&#41;</span> carbon</p>
        </div>
        <div className="image-container">
          <img src="/images/percip.png" alt="Percipitation" />
          <p>Percipitation</p>
        </div>
      </div>
      <div className="picandleg">
        <div className="legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <div className="legend-color pink"></div>
          <p className="plegend">Class 1: Pink</p>
        </div>
        <div className="legend-item">
          <div className="legend-color blue"></div>
          <p className="plegend">Class 2: Blue</p>
        </div>
        <div className="legend-item">
          <div className="legend-color orange-red"></div>
          <p className="plegend">Class 3: Orange/Red</p>
        </div>
        <div className="legend-item">
          <div className="legend-color green"></div>
          <p className="plegend">Class 4: Green</p>
        </div>
        <div className="legend-item">
          <div className="legend-color black"></div>
          <p className="plegend">Class 5: Black</p>
        </div>
      </div>
      <div className="big-image">
        <img src="/images/agrofullnew.jpeg" alt="Big Image" />
        <p>Concatenation of above factors</p>
      </div>
      </div>
    </div>
  );
};

export default Agro;
