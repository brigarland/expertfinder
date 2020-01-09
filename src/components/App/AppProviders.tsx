import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Customizations, Fabric } from 'office-ui-fabric-react'
import store from '../../state'
import { BrowserRouter } from 'react-router-dom'
import { teamsTheme } from '../../themes'

export const AppProviders: React.FC = memo(({ children }) => {
	Customizations.applySettings({ theme: teamsTheme })
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Fabric>{children}</Fabric>
			</Provider>
		</BrowserRouter>
	)
})
