import { createSlice } from "@reduxjs/toolkit";

const radiusSlice = createSlice({
	name: 'radius',
	initialState: {
		coordinates: [],
		radius : 0,
		chosenTypes : []
	},
	reducers: {
		chooseCoordinates(state,action) {
			state.coordinates = action.payload
		},
		chooseRadius(state, action) {
			state.radius = action.payload
		},
		chooseTypes(state, action) {
			state.chosenTypes = action.payload
		}
	}
})

export const selectInfoRadius = (state) => state.radius

export const {chooseRadius, chooseTypes, chooseCoordinates} = radiusSlice.actions

export default radiusSlice.reducer