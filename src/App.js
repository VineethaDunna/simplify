import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./store/userSlice";
import UserList from "./components/UserList";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen bg-white'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<div className='text-center'>
					<div className='text-red-500 text-6xl mb-4'>⚠️</div>
					<h2 className='text-2xl font-bold text-gray-800 mb-2'>
						Oops! Something went wrong
					</h2>
					<p className='text-gray-600 mb-4'>Error: {error}</p>
					<button
						onClick={() => dispatch(fetchUsers())}
						className='btn-primary'>
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='App'>
			<UserList />
		</div>
	);
}

export default App;
