// import React, { useState } from 'react';  // Import useState
// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './map.css';

// function Map() {
//   // State for map center
//   const [mapCenter, setMapCenter] = useState([51.505, -0.09]);

//   // Handle search function
//   const handleSearch = async () => {
//     const query = document.getElementById('location-search').value;
//     const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
//     const data = await response.json();

//     if (data && data.length > 0) {
//       const { lat, lon } = data[0];
//       setMapCenter([parseFloat(lat), parseFloat(lon)]);
//     }
//   };

//   return (
//     <div className="mapContainer">
//       <input type="text" id="location-search" placeholder="Search for a location..." />
//       <button onClick={handleSearch}>Search</button>

//       <MapContainer center={mapCenter} zoom={13} style={{ width: '100%', height: '400px' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </MapContainer>
//     </div>
//   );
// }


// export default Map;



import React from "react";

const Map = () => {
  return (
    <div>
      <h2>Climate Heat Map</h2>
      {/* <div className="green-line"></div> */}

      <iframe
        title="map"
        width="1140"
        height="541.25"
        src="https://msit.powerbi.com/reportEmbed?reportId=1f9305a4-3762-485b-af01-e4f076832c4c&autoAuth=true&ctid=72f988bf-86f1-41af-91ab-2d7cd011db47"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Map;
