import { configureStore } from "@reduxjs/toolkit";
import districtsSlice from './districtsSlice'
import radiusSlice from './radiusSlice'
import mapSlice from './mapSlice'

export default configureStore({
	reducer: {
		districts: districtsSlice,
		radius: radiusSlice, 
		map: mapSlice
	}
})