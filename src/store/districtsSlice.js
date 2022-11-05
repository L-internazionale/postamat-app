import { createSlice } from "@reduxjs/toolkit";

const districtsSlice = createSlice({
	name: 'districts',
	initialState: {
		chosenDistricts : [],
		chosenTypes : ['Oliver Hansen',
		'Van Henry',
		'April Tucker'],
	},
	reducers: {
		chooseDistricts(state, action) {
			state.chosenDistricts = action.payload
		},
		chooseTypes(state, action){
			state.chosenTypes = action.payload
		}
	}
})

export const { chooseDistricts, chooseTypes } = districtsSlice.actions

export default districtsSlice.reducer