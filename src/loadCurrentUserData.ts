import { demoUserInfo } from './hooks'
import store from './state'
import { receiveCurrentUser } from './state/actions'

// TODO: this is pretty coarse. Don't use this as a normative example for data loading
export function loadCurrentUserData() {
	const login = getCurrentUser()
	if (login) {
		//Currently grabbing user infor from static data in hook file :P
		const found = demoUserInfo.find(e => e.email === login)
		if (found) {
			store.dispatch(receiveCurrentUser(found))
		}
	}
}

const getCurrentUser = () => {
	return 'jsmith@microsoft.com'
}
