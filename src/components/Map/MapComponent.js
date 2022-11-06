import React from "react";
import { Map, Marker, Popup, Pane, Circle, useMap, TileLayer, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import Heatmap from "./Heatmap";
import { useSelector } from "react-redux";
import "./Map.css";
import { Box } from '@mui/material';

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export const fillBlueOptions = { fillColor: 'blue' }
export const blackOptions = { color: 'black' }


const MapComponent = () => {
  const chosenDistricts = useSelector((state) => state.districts.chosenDistricts);
  const purpleOptions = { color: 'purple' }
  const [map, setMap] = React.useState(null)

  return (
		<Box sx={{ 
			width: '100%',
        	height: '100%',
			}}>
		    <Map center={[55.755825, 37.617298]}  zoom={12}>
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

			{chosenDistricts.map(district => (
				<Polygon
				positions={
					district.polygon
				}
				onClick={() => {
					console.log(district);
				}}
				pathOptions={purpleOptions}
				/>
			))}
			</Map>
		</Box>
  )
}

export default MapComponent