import React from 'react';
import './App.css';
import ParallaxIntro from './components/ParallaxIntro/parallax';
import Map from './components/Map/map';
import CarbonCalculator from './components/CarbonFootPrint/carbonfootprint';
import Agro from './components/agro/agro';

function App() {
  return (
    <div className="App">
      <ParallaxIntro />
      <div id = "ourWorkSection">
      <Agro />
      </div>
      <div className="separator"></div>
      <div id="powerBISection">
      <Map />
      </div>
      <div className="separator"></div>
        <div id = "calculatorSection" className="calculator">
          <CarbonCalculator/>
        </div>
      <div className="separator"></div>
        <div id="joinUsSection" className="join-us-content">
          <h2>Join Us</h2>
            <p>
              Agroforestry, the artful blend of agriculture and forestry, is more than just a trend—it's a sustainable solution for our future. By integrating trees, shrubs, and crops, we not only enhance biodiversity and protect our soil but also create a resilient ecosystem that combats climate change. This harmonious approach offers a myriad of benefits, from carbon sequestration to improved water quality, and from diversified income sources for farmers to habitats for wildlife. As we face global challenges, agroforestry stands as a beacon of hope, promising both ecological balance and economic prosperity. Join us in championing this green movement and shaping a brighter, greener future for all.
          </p>
      </div>
      <div className="separator"></div>
      <div id="learnMoreSection" className="content-section">
        <h2>Learn More</h2>
        <p>
          Dive deeper into the world of agroforestry and discover the science, techniques, and stories behind this sustainable approach. From case studies to expert insights, our resources provide a comprehensive understanding of how agroforestry is shaping landscapes and communities around the world. Whether you're a farmer, researcher, or just curious, there's always more to learn about this green revolution.
        </p>
      </div>

      {/* Other components */}
    </div>
  );
}

export default App;











