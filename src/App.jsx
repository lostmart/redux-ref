import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from './features/userSlice'

import './App.css'

function App() {
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

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
		setF_name(e.target.value)
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
		</div>
	)
}

export default App
