import api from './api'
import store from './state'
import { receiveCurrentUser } from './state/actions'

// TODO: this is pretty coarse. Don't use this as a normative example for data loading
export function loadCurrentUserData() {
	const login = getCurrentUser()
	if (login) {
		api.getPeople().then(employees => {
			const found = employees.find(e => e.email === login)
			console.log(found ? 'Found is true' : 'Found is false')
			if (found) {
				store.dispatch(receiveCurrentUser(found))
			}
		})
	}
}

const getCurrentUser = () => {
	return 'bgarland@bpcs.com'
}
