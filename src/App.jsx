import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from './features/userSlice'

/* thunk to bring users  */
import userAsync, { fetchUsers } from './features/userAsync'

import './App.css'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	const user = useSelector((state) => state.user)

	const asyncUsers = useSelector((state) => state.asynUsers)

	const [f_name, setF_name] = useState('')

	const handleHardcodedClick = () => {
		const newUser = {
			firstName: 'Hard',
			lastName: 'Coded',
			age: 60,
		}
		dispatch(createUser(newUser))
	}

	const handleChange = (e) => {
		setF_name(() => {
			return e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newUser = {
			firstName: f_name,
			lastName: 'Coded',
			age: 60,
		}
		dispatch(createUser(newUser))
		setF_name('')
	}

	const callApi = () => {
		console.log('calling api ... ')
	}

	return (
		<div>
			User:
			<p>
				<strong>Name: </strong> {user.firstName} {user.lastName}
			</p>
			<p>
				<strong>Age:</strong> {user.age}
			</p>
			<button onClick={handleHardcodedClick}>Hard coded user</button>
			<hr />
			<form>
				<label htmlFor="f_name">First Name:</label>
				<input value={f_name} onChange={handleChange} type="text" id="f_name" />
				<button onClick={handleSubmit}>Save</button>
			</form>
			{f_name}
			<hr />
			<div>
				<h2>Async fetch</h2>
				{asyncUsers.loading && <div>loading ...</div>}
				{!asyncUsers.loading && asyncUsers.error ? (
					<div>Error ...{user.error} </div>
				) : null}
				{!asyncUsers.loading && asyncUsers.data ? (
					<div>
						{asyncUsers.data.map((user) => {
							return <li key={user.id}> {user.id} </li>
						})}
					</div>
				) : null}
			</div>
		</div>
	)
}

export default App
