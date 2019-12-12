import React from 'react'

import {
	DetailsList,
	DetailsListLayoutMode,
	Selection,
	SelectionMode,
	IColumn,
} from 'office-ui-fabric-react/lib/DetailsList'
import { PageSurface, Panel } from '../../Shared'
import MessageDisplay from './MessageDisplay'
import styles from './Dashboard.module.scss'
import SkillsIcon from '../../../images/skills-icon.svg'

export const Dashboard: React.FC = () => {
	return (
		<PageSurface title="People Connector Dashboard">
			<div className={styles.dashboardContainer}>
				<div style={{ width: '372px' }}>
					<Panel
						// fabricIcon="ChevronDown"
						customIcon={SkillsIcon}
						title="Skills, Certifications, & Projects"
						footerText="See All Kudos"
						footerLink="#"
						// width="372px"
					>
						Content
					</Panel>
				</div>
				{/* <MessageDisplay title="Incoming Messages" /> */}
			</div>
		</PageSurface>
	)
}
