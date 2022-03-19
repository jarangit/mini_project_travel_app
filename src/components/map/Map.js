import React from "react";
import GoogleMapReact from "google-map-react";
const Map = ({ coordinates, setcoordinates, setbounds }) => {
  return (
    <div className="map" style={{ height: "100vh", width: "100%" }}>
      <h3>Map</h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setcoordinates({ lat: e.center.lat, lng: e.center.lng });
          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
