export const CURRENT_USER_KEY = 'App::CurrentUser'

export function getCurrentUser() {
	// return localStorage.getItem(CURRENT_USER_KEY)
	return 'chtrevin@microsoft.com'
}

export function setCurrentUser(value: string) {
	return localStorage.setItem(CURRENT_USER_KEY, value)
}
