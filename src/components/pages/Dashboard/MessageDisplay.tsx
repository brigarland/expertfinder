import React from 'react'

import {
	DetailsList,
	DetailsListLayoutMode,
	Selection,
	SelectionMode,
	IColumn,
} from 'office-ui-fabric-react/lib/DetailsList'
import DashboardRequest from './DashboardRequest'
import styles from './Dashboard.module.scss'

export interface Props extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Header Text to go at top of Sidebar
	 */
	title?: string
}

const incomingMessages = [
	{ key: 0, value: { message: 'Hello User' }, name: 'Jonathan' },
	{ key: 1, value: { message: 'Hello Test' } },
	{ key: 2, value: 'Hello user' },
	{ key: 3, value: 'Hello user' },
	{ key: 4, value: 'Hello user' },
	{ key: 5, value: 'Hello user' },
	{ key: 6, value: 'Hello user' },
]

const incomingColumns = [
	{
		key: 'column1',
		name: 'Value',
		fieldName: 'value',
		minWidth: 100,
		onRender: (item: any) => <DashboardRequest message={item} />,
	},
]

const MessageDisplay: React.FC<Props> = props => {
	return (
		<div className={styles.incomingMessages}>
			<h3>{props.title}</h3>
			<DetailsList
				items={incomingMessages}
				columns={incomingColumns}
			></DetailsList>
		</div>
	)
}

export default MessageDisplay
