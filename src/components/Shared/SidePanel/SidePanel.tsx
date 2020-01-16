import React, { memo } from 'react'
import { ContentBlock } from '../.'
import styles from './SidePanel.module.scss'

export interface ISidePanelProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Header Text to go at top of Sidebar
	 */
	headerText: string

	/**
	 * Optional icon either using Office UI Fabric React 'iconName' or a
	 * valid SVG path
	 */
	icon?: string
}

export const SidePanel: React.FC<ISidePanelProps> = memo(
	({ headerText, icon, children }) => {
		return (
			<div className={styles.sidePanelRoot} role="navigation">
				<ContentBlock icon={icon} headerText={headerText}>
					{children}
				</ContentBlock>
			</div>
		)
	},
)
