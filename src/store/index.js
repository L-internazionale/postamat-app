import { configureStore } from "@reduxjs/toolkit";
import districtsSlice from './districtsSlice'
import radiusSlice from './radiusSlice'

export default configureStore({
	reducer: {
		districts: districtsSlice,
		radius: radiusSlice 
	}
})