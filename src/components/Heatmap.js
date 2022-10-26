import React from 'react'
import * as heatmapData from "../data/heatmap-info.json";
import HeatmapLayer from "react-leaflet-heatmap-layer";


const Heatmap = () => {
  return (
	<HeatmapLayer
	points={heatmapData.features}
	longitudeExtractor={(m) => m.geometry.coordinates[0]}
	latitudeExtractor={(m) => m.geometry.coordinates[1]}
	intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
	max={100}
	minOpacity={0.2}
  />
  )
}

export default Heatmap