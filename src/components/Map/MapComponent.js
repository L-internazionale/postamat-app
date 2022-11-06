import React, { useRef, useEffect } from "react";
import { Map, Marker, Popup, Pane, Circle, TileLayer, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import Heatmap from "./Heatmap";
import { useSelector, useDispatch } from "react-redux";
import "./Map.css";
import { Box } from '@mui/material';
import { chooseMap } from "../../store/mapSlice";
import { chooseCoordinates } from "../../store/radiusSlice";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export const fillBlueOptions = { fillColor: 'blue' }
export const blackOptions = { color: 'black' }


const MapComponent = () => {
  const dispatch = useDispatch()
  const chosenDistricts = useSelector((state) => state.districts.chosenDistricts);
  const chosenPoints = useSelector((state) => state.map.chosenObjects)
  const chosenMap = useSelector((state) => state.map.mapReference);
  const chosenRadius = useSelector((state) => state.radius.radius)
  const purpleOptions = { color: 'purple' };
  const [marker, setMarker] = React.useState({lat: 0, lng: 0});
  
  const mapRef = useRef();


	
  function changeUbication(e) {
		let {lat, lng} = e.latlng;
		console.info("Lat:", lat);
		console.info("Lng: ",lng);
		dispatch(chooseCoordinates([lat,lng]))
		console.log(e.latlng)
		setMarker(e.latlng);
	}
  
  function handleToFly(districtToFly){
		const { current = {} } = mapRef;
		const { leafletElement: map } = current;
		map.setView(districtToFly.center, 11)
  }

  return (
		<Box sx={{ 
			width: '100%',
        	height: '100%',
			}}>
			<Map 
			 ref={mapRef}
			 center={[55.755825, 37.617298]}
             zoom={10}
             onClick={changeUbication}>
             <TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			 />
            {(marker.lat !== 0 && marker.lng !== 0) &&
            <Marker position={[marker.lat, marker.lng]}>
			<Circle 
                  center={{lat:marker.lat, lng: marker.lng}}
                  fillColor="blue" 
                  radius={chosenRadius}/>
            </Marker>}
			<Heatmap/>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Pane name="custom" style={{ zIndex: 100 }}>
				<Circle center={[55.755825, 37.617298]} radius={100} />
			</Pane>

			{chosenDistricts.map(district => (
				<Polygon
				positions={
					district.polygon
				}
				onClick={() => {
					handleToFly(district);
				}}
				pathOptions={purpleOptions}
				/>
			))}

			{chosenPoints.map(point => (
				console.log(point.geometry['coordinates'])
			))}

			</Map>
		</Box>
  )
}

export default MapComponent