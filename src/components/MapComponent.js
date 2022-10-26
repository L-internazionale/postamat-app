import React from "react";
import { Map, Marker, Popup, Pane, Circle, TileLayer, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../data/skateboard-parks.json";
import * as districtData from "../data/districts.json"
import Heatmap from "./Heatmap";
import "./Map.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export const fillBlueOptions = { fillColor: 'blue' }
export const blackOptions = { color: 'black' }


const MapComponent = () => {
  const [activePark, setActivePark] = React.useState(null);
  const purpleOptions = { color: 'purple' }
  return (
    <Map center={[55.755825, 37.617298]} zoom={12}>
	  <Heatmap/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
	  <Pane name="custom" style={{ zIndex: 100 }}>
		<Circle center={[55.755825, 37.617298]} radius={200} />
	   </Pane>
	  <Marker position={[55.755825, 37.617298]}>
		<Popup>Hello world</Popup>
	  </Marker>

	  {districtData.features.map(district => (
        <Polygon
          positions={[
            district.geometry.coordinates
          ]}
		  onClick={() => {
            console.log('mosab');
          }}
		  pathOptions={purpleOptions}
        />
      ))}

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </Map>
  )
}

export default MapComponent