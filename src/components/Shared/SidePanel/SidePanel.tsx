import React, { memo } from 'react'
import styles from './SidePanel.module.scss'

export interface ISidePanelProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Header Text to go at top of Sidebar
	 */
	headerText: string

	/**
	 * Text for Optional header at top of Grid
	 */
	blurbText?: string
}

export const SidePanel: React.FC<ISidePanelProps> = memo(
	({ headerText, blurbText, children }) => {
		return (
			<div className={styles.sidePanelRoot} role="navigation">
				<div className={styles.sidePanelWrapper}>
					<div className={styles.sidePanelCnt}>
						<div className={styles.header}>
							<span>{headerText}</span>
						</div>
						{blurbText && (
							<div className={styles.blurb}>
								<span>{blurbText}</span>
							</div>
						)}
						<div className={styles.sidePanelContent}>{children}</div>
					</div>
				</div>
			</div>
		)
	},
)
