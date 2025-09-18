import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	FaUserPlus,
	FaUserEdit,
	FaUserTimes,
	FaUserShield,
} from "react-icons/fa";

import { Row } from "antd";
import { motion } from "framer-motion";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

import { deleteUser, updateUser, addUser } from "../store/userSlice";

const UserList = () => {
	const { users } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const [modalOpen, setModalOpen] = useState(false);
	const [editingUser, setEditingUser] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const notifyAdd = () =>
		toast.success(
			<div className='flex items-center gap-2'>
				<FaUserPlus className='text-green-500' />
				<span>User added successfully</span>
			</div>
		);

	const notifyUpdate = () =>
		toast.info(
			<div className='flex items-center gap-2'>
				<FaUserEdit className='text-blue-500' />
				<span>User updated successfully</span>
			</div>
		);

	const notifyDelete = () =>
		toast.error(
			<div className='flex items-center gap-2'>
				<FaUserTimes className='text-red-500' />
				<span>User deleted successfully</span>
			</div>
		);

	const handleEdit = (user) => {
		setEditingUser(user);
		setIsEditing(true);
		setModalOpen(true);
	};

	const handleDelete = (userId) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			dispatch(deleteUser(userId));
			notifyDelete();
		}
	};

	const handleAddNew = () => {
		setEditingUser(null);
		setIsEditing(false);
		setModalOpen(true);
	};

	const handleSaveUser = (userData) => {
		if (isEditing) {
			dispatch(updateUser(userData));
			notifyUpdate();
		} else {
			dispatch(addUser(userData));
			notifyAdd();
		}
		setModalOpen(false);
		setEditingUser(null);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setEditingUser(null);
		setIsEditing(false);
	};
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // delay between each card
			},
		},
	};

	// Variants for each card
	const cardVariants = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};
	return (
		<div className='container mx-auto px-4 py-10'>
			{/* Toast container */}
			<ToastContainer
				position='top-right'
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>

			{/* Header */}
			<div className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white shadow-2xl'>
				<div className='flex justify-between items-center max-w-7xl mx-auto px-4 h-20'>
					{/* Title */}
					<div>
						<h1 className='text-xl md:text-2xl font-bold drop-shadow-lg'>
							SimpliFy User Directory
						</h1>
						<p className='text-indigo-100 text-sm md:text-base'>
							Manage and view user profiles
						</p>
					</div>

					{/* Add User Button */}
					<button
						onClick={handleAddNew}
						className='bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-lg flex items-center hover:scale-105 transform transition-all duration-300'>
						{/* Mobile: only icon */}
						<FaUserPlus className='md:mr-2' />
						<span className='hidden md:inline'>Add User</span>
					</button>
				</div>
			</div>

			{/* Spacer div so content below doesn't hide */}
			<div className='h-20 md:h-24'></div>

			{/* Add a spacer div below header so content doesn’t get hidden under fixed navbar */}
			<div className='h-2'></div>

			{/* Stats */}
			<motion.div
				className='bg-gradient-to-br from-indigo-100 via-white to-indigo-50
             rounded-2xl shadow-2xl p-4 w-full max-w-md mx-auto text-center border border-indigo-200'>
				{/* Icon */}
				<div className='flex justify-center mb-4'>
					<div className='p-4 rounded-full bg-indigo-200 shadow-md'>
						<FaUserShield className='w-10 h-10 text-indigo-700' />
					</div>
				</div>

				{/* Count */}
				<motion.p
					key={users.length}
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='text-5xl font-extrabold text-indigo-800'>
					{users.length > 0 ? users.length : "0"}
				</motion.p>

				{/* Label */}
				<p className='text-lg text-gray-600 font-medium mt-2'>
					{users.length > 0 ? "Total Users" : "No Users Yet"}
				</p>

				{/* Context Line */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className='mt-4 text-sm text-gray-500 italic'>
					These are the users in our{" "}
					<span className='font-semibold text-indigo-600'>
						SimpliFy Company
					</span>
					.
				</motion.p>
			</motion.div>
			{/* User Grid */}
			<Row gutter={[20, 20]} className='mt-10'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='show'
					className='flex flex-wrap justify-center gap-6 w-full'>
					{users.map((user) => (
						<motion.div
							key={user.id}
							variants={cardVariants}
							className='flex-1 min-w-[280px] max-w-[320px]'>
							<UserCard
								user={user}
								onEdit={handleEdit}
								onDelete={handleDelete}
							/>
						</motion.div>
					))}
				</motion.div>
			</Row>

			{/* Empty state */}
			{users.length === 0 && (
				<div className='text-center py-20 bg-white rounded-2xl shadow-lg mt-10 border border-gray-100'>
					<svg
						className='w-24 h-24 mx-auto text-gray-300 mb-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1}
							d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
						/>
					</svg>
					<h3 className='text-2xl font-semibold text-gray-500 mb-3'>
						No users found
					</h3>
					<p className='text-gray-400 mb-6'>
						Get started by adding your first user
					</p>
					<button
						onClick={handleAddNew}
						className='bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300'>
						<FaUserPlus className='mr-2' />
						Add First User
					</button>
				</div>
			)}

			{/* Modal */}
			<UserModal
				isOpen={modalOpen}
				onClose={handleCloseModal}
				onSave={handleSaveUser}
				user={editingUser}
				isEditing={isEditing}
			/>
		</div>
	);
};

export default UserList;
