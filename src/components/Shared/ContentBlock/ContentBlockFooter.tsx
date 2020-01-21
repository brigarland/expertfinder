import React from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './ContentBlock.module.scss'

export interface IContentBlockFooterProps {
	/**
	 * Link text for the footer CTA link
	 * Default: 'Read More'
	 */
	text: string
	/**
	 * Hyperlink for footer call to action
	 */
	link?: string
	/**
	 * Hyperlink for footer call to action
	 */
	onClick?: () => void
}

export const ContentBlockFooter: React.FC<IContentBlockFooterProps> = ({
	text,
	link,
	onClick = () => {},
}) => {
	const linkCnt = (
		<div className={styles.linkCnt}>
			<div className={styles.linkTextCnt}>{text}</div>
			<div className={styles.linkIconCnt}>
				<Icon iconName="ChevronRightSmall" />
			</div>
		</div>
	)
	return (
		<div className={styles.footer}>
			{link ? (
				<a href={link}>{linkCnt}</a>
			) : (
				<div onClick={onClick} style={{ cursor: 'pointer' }}>
					{linkCnt}
				</div>
			)}
		</div>
	)
}
