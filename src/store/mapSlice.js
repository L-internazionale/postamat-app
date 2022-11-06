import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
	name: 'map',
	initialState: {
		chosenObjects : []
	},
	reducers: {
		chooseObjects(state, action) {
			state.chosenObjects = action.payload
		}
	}
})

export const { chooseObjects } = mapSlice.actions

export default mapSlice.reducer