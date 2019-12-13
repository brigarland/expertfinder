import React from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './ContentBlock.module.scss'

export interface IContentBlockFooterProps {
	/**
	 * Link text for the footer CTA link
	 * Default: 'Read More'
	 */
	text?: string
	/**
	 * Hyperlink for footer call to action
	 */
	link: string
}

export const ContentBlockFooter: React.FC<IContentBlockFooterProps> = ({
	text,
	link,
}) => {
	return (
		<div className={styles.footer}>
			<a href={link}>
				<div className={styles.linkCnt}>
					<div className={styles.linkTextCnt}>{text}</div>
					<div className={styles.linkIconCnt}>
						<Icon iconName="ChevronRightSmall" />
					</div>
				</div>
			</a>
		</div>
	)
}
