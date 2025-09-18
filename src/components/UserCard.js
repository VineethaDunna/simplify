import React from "react";
import { Card, Space, Typography, Tooltip } from "antd";
import { motion } from "framer-motion";
import {
	EditOutlined,
	DeleteOutlined,
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined,
	HomeOutlined,
	BankOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const UserCard = ({ user, onEdit, onDelete }) => {
	const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 200, damping: 18 }}>
			<Card
				hoverable
				bordered={false}
				style={{
					borderRadius: "16px",
					overflow: "hidden",
					boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
				}}
				cover={
					<div className='bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center'>
						<img
							src={avatarUrl}
							alt={user.name}
							className='w-24 h-24 rounded-full border-4 border-white mx-auto shadow-lg'
						/>
						<h3 className='text-xl font-bold text-white mt-3'>{user.name}</h3>
						<p className='text-indigo-100'>@{user.username}</p>
					</div>
				}
				actions={[
					<Tooltip title='Edit User' key='edit'>
						<EditOutlined
							onClick={() => onEdit(user)}
							style={{ fontSize: "18px", color: "#1890ff" }}
						/>
					</Tooltip>,
					<Tooltip title='Delete User' key='delete'>
						<DeleteOutlined
							onClick={() => onDelete(user.id)}
							style={{ fontSize: "18px", color: "#ff4d4f" }}
						/>
					</Tooltip>,
				]}>
				<Space direction='vertical' size='small' className='w-full'>
					<Text strong>
						<MailOutlined className='text-indigo-500 mr-2' />
						{user.email}
					</Text>
					<Text>
						<PhoneOutlined className='text-green-500 mr-2' />
						{user.phone}
					</Text>
					<Text>
						<HomeOutlined className='text-red-500 mr-2' />
						{user.address.street}, {user.address.city}
					</Text>
					<Text>
						<GlobalOutlined className='text-blue-500 mr-2' />
						{user.website}
					</Text>
					<Text>
						<BankOutlined className='text-yellow-500 mr-2' />
						{user.company.name}
					</Text>
				</Space>
			</Card>
		</motion.div>
	);
};

export default UserCard;
