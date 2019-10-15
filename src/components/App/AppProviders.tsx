import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Fabric } from 'office-ui-fabric-react'
import store from '../../state'
import { BrowserRouter } from 'react-router-dom'
import {
	TeamsThemeContext,
	ThemeStyle,
	getContext,
} from 'msteams-ui-components-react'

export const AppProviders: React.FC = memo(({ children }) => {
	const context = getContext({
		baseFontSize: 16,
		style: ThemeStyle.Light,
	})
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Fabric>
					<TeamsThemeContext.Provider value={context}>
						{children}
					</TeamsThemeContext.Provider>
				</Fabric>
			</Provider>
		</BrowserRouter>
	)
})
