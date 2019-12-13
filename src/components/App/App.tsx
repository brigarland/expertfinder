import React, { memo } from 'react'
import { Routes } from './Routes'
import { AppProviders } from './AppProviders'

export const App: React.FC = memo(() => (
	<AppProviders>
		<Routes />
	</AppProviders>
))
