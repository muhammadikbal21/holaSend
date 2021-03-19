import React, { useState } from "react";
import { GoogleComponent } from "react-google-location";

const Map = ({ label, ...rest }) => {

  const [place, setPlace] = useState(null)

  const API_KEY = "AIzaSyA0XXI0CFZSrz41iDAv6D_wC_iBUYBIabo";

  console.log("mapnya: ", place);

  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <GoogleComponent
        apiKey={API_KEY}
        language={"en"}
        country={"country:in|country:us"}
        coordinates={true}
        // locationBoxStyle={'custom-style'}
        // locationListStyle={'custom-style-list'}
        onChange={(e) => setPlace(e)}
      />
    </div>
  );
};

export default Map;
