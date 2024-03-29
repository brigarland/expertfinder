import { Action } from 'redux-actions'
import { RECEIVE_CURRENT_USER } from '../actions'
import { IPerson } from '../../api'

export type State = IPerson | null

export default function reduce(
	state: State = null,
	action: Action<any>,
): State {
	if (action.type === RECEIVE_CURRENT_USER) {
		return action.payload
	}
	return state
}
