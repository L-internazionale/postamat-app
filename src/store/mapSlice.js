import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
	name: 'map',
	initialState: {
		chosenObjects : [],
		mapReference : 0
	},
	reducers: {
		chooseObjects(state, action) {
			state.chosenObjects = action.payload
		},
		chooseMap(state, action){
			state.mapReference = action.payload
		}
	}
})

export const { chooseObjects, chooseMap } = mapSlice.actions

export default mapSlice.reducer