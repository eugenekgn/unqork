import React from "react";
import { Card, Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

const { Meta } = Card;



class Person extends React.PureComponent {

	onAction(config) {
		const { dispatch } = this.props
		if (config.type === 'function') {
			console.log(config)
			dispatch(config.value(...config.arguments))
		}

	}

	render() {
		const {
			avatar: { value: avatarUrl },
			firstName: { value: firstName },
			lastName: { value: lastName },
			index,
			onClick: userAction,
		} = this.props

		return (
			<Card
				key={`card-${index}`}
				title={`${firstName} ${lastName}`}
				cover={
					<img
						alt={firstName}
						src={avatarUrl}
					/>
				}
				actions={[
					<PlusCircleOutlined onClick={() => this.onAction(userAction)} />
				]}>
				<Meta
					avatar={<Avatar src={avatarUrl} />}
					width={100}
				/>
			</Card>
		)
	}
}

export default connect(state => state)(Person)