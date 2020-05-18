export const INCREMENT_SCORE = 'incrementScore'

export const incrementScore = ({ value }) => {
	return {
		type: INCREMENT_SCORE,
		payload: { value }
	}
}