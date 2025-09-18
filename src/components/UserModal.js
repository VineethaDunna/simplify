import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, Button } from "antd";

const UserModal = ({ isOpen, onClose, onSave, user, isEditing }) => {
	const [form] = Form.useForm();

	useEffect(() => {
		if (isEditing && user) {
			// Set nested fields explicitly
			form.setFieldsValue({
				name: user.name,
				username: user.username,
				email: user.email,
				phone: user.phone,
				website: user.website,
				address: {
					street: user.address?.street || "",
					suite: user.address?.suite || "",
					city: user.address?.city || "",
					zipcode: user.address?.zipcode || "",
				},
				company: {
					name: user.company?.name || "",
				},
			});
		} else {
			form.resetFields();
		}
	}, [isEditing, user, isOpen, form]);

	const handleSubmit = () => {
		form
			.validateFields()
			.then((values) => {
				if (isEditing) {
					// Include user ID for update
					onSave({ ...values, id: user.id });
				} else {
					onSave(values);
				}
				form.resetFields();
			})
			.catch((info) => {
				console.log("Validation Failed:", info);
			});
	};

	return (
		<Modal
			title={isEditing ? "Edit User" : "Add New User"}
			open={isOpen}
			onCancel={onClose}
			footer={null}
			centered
			className='rounded-xl'>
			<Form
				form={form}
				layout='vertical'
				onFinish={handleSubmit}
				initialValues={{
					name: "",
					username: "",
					email: "",
					phone: "",
					website: "",
					address: { street: "", suite: "", city: "", zipcode: "" },
					company: { name: "" },
				}}>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							label='Name'
							name='name'
							rules={[{ required: true, message: "Please enter a name" }]}>
							<Input placeholder='Enter full name' />
						</Form.Item>
					</Col>

					<Col span={12}>
						<Form.Item
							label='Username'
							name='username'
							rules={[{ required: true, message: "Please enter a username" }]}>
							<Input placeholder='Enter username' />
						</Form.Item>
					</Col>
				</Row>

				<Form.Item
					label='Email'
					name='email'
					rules={[
						{ required: true, message: "Please enter an email" },
						{ type: "email", message: "Enter a valid email address" },
					]}>
					<Input placeholder='example@email.com' />
				</Form.Item>

				<Row gutter={16}>
					<Col span={12}>
						<Form.Item label='Phone' name='phone'>
							<Input placeholder='Optional' />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label='Website' name='website'>
							<Input placeholder='www.example.com' />
						</Form.Item>
					</Col>
				</Row>

				<Row gutter={16}>
					<Col span={12}>
						<Form.Item label='Street' name={["address", "street"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label='Suite' name={["address", "suite"]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				<Row gutter={16}>
					<Col span={12}>
						<Form.Item label='City' name={["address", "city"]}>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label='Zipcode' name={["address", "zipcode"]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				<Form.Item label='Company Name' name={["company", "name"]}>
					<Input />
				</Form.Item>

				<div className='flex justify-end gap-3 mt-4'>
					<Button onClick={onClose}>Cancel</Button>
					<Button type='primary' htmlType='submit'>
						{isEditing ? "Update User" : "Add User"}
					</Button>
				</div>
			</Form>
		</Modal>
	);
};

export default UserModal;
