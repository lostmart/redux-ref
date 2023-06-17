import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		firstName: 'Bobby',
		lastName: 'Checkorth',
		age: 12,
	},
	reducers: {
		createUser: (state, action) => {
			/*
			*
			/* state.firstName = action.payload.firstName
			/* state.lastName = action.payload.lastName
			/* state.age = action.payload.age
			/* LO DE ABAJO ES LO MISMO !
			*/
			const { firstName, lastName, age } = action.payload
			return {
				...state,
				firstName,
				lastName,
				age,
			}
		},
	},
})

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions

export default userSlice.reducer
