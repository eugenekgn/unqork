import React from "react";
import { connect } from 'react-redux'
import {
	Layout,
	List
} from 'antd'

import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const css = {
	header: { color: 'white' }
}

const gridOptions = {
	gutter: 16,
	xs: 1,
	sm: 2,
	md: 4,
	lg: 4,
	xl: 6,
	xxl: 3,
}

class People extends React.Component {

	render() {
		const { children, scores = {} } = this.props
		console.log(scores)

		const scoreBoard = Object.values(scores).map((score) => `${score.name}  ${score.initialValue}`).join(' | ')

		return (
			<Layout className="layout" style={{ height: '100vh' }}>

				<Header className="header" style={{ marginBottom: 32 }}>
					<div style={css.header}>
						{scoreBoard}

					</div>
				</Header>

				<Content style={{ padding: '0 50px' }}>
					<List
						grid={gridOptions}
						dataSource={children}
						renderItem={(component, index) => {
							const { component: PersonComponent } = component
							return <List.Item>
								<PersonComponent {...component.properties} index={index} />
							</List.Item>
						}}
					/>
				</Content>
				<Footer style={{ textAlign: 'center' }}> Unqork </Footer>
			</Layout>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(People)