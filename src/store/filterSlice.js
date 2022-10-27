import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState: {
		radiusChosen: false,
		radius : 0,
		distictsChosen : false,
		districts : [],
		adminDistrictsChosen : false,
		adminDistrictsList : [],
		chosenBuildingsList : [],
		chosenModel : 0,
	},
	reducers: {
		chooseRadius(state, action) {
			state.distictsChosen = false
			state.adminDistrictsChosen = false
			state.radiusChosen = true
			state.radius = action.payload.radius

		},
		chooseDistricts(state, action) {
			state.adminDistrictsChosen = false
			state.radiusChosen = false 
			state.distictsChosen = true 
		},
		pickDistricts(state, action) {},
		chooseAdminDistricts(state, action) {},
		pickAdminDistricts(state, action) {},
		chooseBuildings(state, action) {},
		chooseModel(state, action) {}
	}
})

export const {chooseRadius, chooseDistricts, pickDistricts, pickAdminDistricts, chooseBuildings, chooseModel} = filterSlice.actions

export default filterSlice.reducer