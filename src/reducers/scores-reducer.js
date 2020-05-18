import { INCREMENT_SCORE } from '../actions/scores-actions'

const statePayload = {
	'c191b3b4-3dcd-4315-a28d-f5174329d9db': {
		name: 'andreScore',
		initialValue: 18,
	},
	'b61f6d90-c8a8-40b6-84d6-c14a699bb46f': {
		name: 'jeremieScore',
		initialValue: 39,
	},
	'882dc4fc-0431-497d-8355-0b4f349a08db': {
		name: 'ivanScore',
		initialValue: 26,
	},
}


const scoreReducer = (state = statePayload, action) => {
	switch (action.type) {
		case INCREMENT_SCORE:
			const key = action.payload.value
			const current = state[key]
			const newState = {
				...state,
				[key]: {
					name: current.name,
					initialValue: current.initialValue + 1
				}
			}
			return newState
		default:
			return state
	}
}

export default scoreReducer;