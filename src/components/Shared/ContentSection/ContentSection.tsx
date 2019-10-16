import React, { memo } from 'react'
import styles from './ContentSection.module.scss'

export interface IContentSectionProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Header Text to go at top of section
	 */
	headerText: string
}

export const ContentSection: React.FC<IContentSectionProps> = memo(
	({ headerText, children }) => {
		return (
			<div className={styles.contentSectionRoot} role="main">
				<div className={styles.contentSectionCnt}>
					<div className={styles.header}>
						<span>{headerText}</span>
					</div>
					<div className={styles.contentSectionContent}>{children}</div>
				</div>
			</div>
		)
	},
)
