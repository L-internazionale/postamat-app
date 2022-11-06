import {
  configureStore
} from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
  } from 'redux-persist'
import districtsSlice from './districtsSlice'
import radiusSlice from './radiusSlice'
import mapSlice from './mapSlice'


export default configureStore({
	reducer: {
		districts: districtsSlice,
		radius: radiusSlice, 
		map: mapSlice
	},
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})