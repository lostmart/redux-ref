import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import userAsync from '../features/userAsync'

export default configureStore({
	reducer: {
		user: userReducer,
		asynUsers: userAsync,
	},
})
