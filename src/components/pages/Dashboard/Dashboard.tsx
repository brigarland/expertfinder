import React from 'react'

import {
	DetailsList,
	DetailsListLayoutMode,
	Selection,
	SelectionMode,
	IColumn,
} from 'office-ui-fabric-react/lib/DetailsList'
import { PageSurface } from '../../Shared'
import MessageDisplay from './MessageDisplay'
import styles from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
	return (
		<PageSurface title="People Connector Dashboard">
			<h1>Dashboard</h1>
			<MessageDisplay title="Incoming Messages" />
			{/* <MessageDisplay title="Outoging Requests" /> */}
		</PageSurface>
	)
}
