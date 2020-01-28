import React from 'react'
import { IProject } from '../../../../../api'
import moment from 'moment'
import { Icon } from 'office-ui-fabric-react'
import { ColorPalette } from '../../../../../styles'
import styles from '../CertsProjectBlocks.module.scss'

export interface IProjectProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Projectification object from API
	 */
	project: IProject
}

export const Project: React.FC<IProjectProps> = ({ project }) => {
	const iconTypeValues = {
		BusinessDev: {
			color: ColorPalette.yellowShade10,
			iconName: 'Work',
		},
		GlobalNetworking: {
			color: ColorPalette.greenShade10,
			iconName: 'Commitments',
		},
		Infrastructure: {
			color: ColorPalette.orangeShade10,
			iconName: 'IssueTracking',
		},
	}

	return (
		<div className={styles.projectRoot}>
			<div className={styles.iconCnt}>
				<div
					className={styles.iconBg}
					style={{ backgroundColor: iconTypeValues[project.type].color }}
				>
					<Icon iconName={iconTypeValues[project.type].iconName} />
				</div>
			</div>
			<div className={styles.infoCnt}>
				<div className={styles.title}>{project.title}</div>
				<div className={styles.date}>
					Start Date: {moment(project.startDate.toString()).format('MMMM YYYY')}
				</div>
				{project.endDate && (
					<div className={styles.date}>
						End Date: {moment(project.endDate.toString()).format('MMMM YYYY')}
					</div>
				)}
			</div>
		</div>
	)
}
