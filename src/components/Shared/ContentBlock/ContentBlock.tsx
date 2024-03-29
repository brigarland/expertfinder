import React from 'react'
import { Icon } from 'office-ui-fabric-react'
import {
	ContentBlockFooter,
	IContentBlockFooterProps,
} from './ContentBlockFooter'
import styles from './ContentBlock.module.scss'

export interface IContentBlockProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Optional icon either using Office UI Fabric React 'iconName' or a
	 * valid SVG path
	 */
	icon?: string
	/**
	 * Text to show in the header bar of the component
	 */
	headerText?: string
	/**
	 * Content for the optional footer
	 */
	footer?: IContentBlockFooterProps
	/**
	 * disables default padding in content section
	 */
	disablePadding?: boolean
}

export const ContentBlock: React.FC<IContentBlockProps> = ({
	icon,
	headerText,
	footer,
	disablePadding,
	children,
}) => {
	const renderIcon = () => {
		if (icon) {
			if (icon.includes('.')) {
				return (
					<div className={styles.iconImgCnt}>
						<img
							className={styles.iconImg}
							src={icon}
							alt={`${headerText} icon`}
						/>
					</div>
				)
			} else {
				return <Icon className={styles.icon} iconName={icon} />
			}
		}
		return <></>
	}

	return (
		<div className={styles.contentBlockRoot}>
			<div className={styles.header}>
				<div className={styles.iconCnt} aria-hidden="true">
					{renderIcon()}
				</div>
				{headerText && <div className={styles.txtCnt}>{headerText}</div>}
			</div>
			<div
				className={styles.content}
				style={{ padding: disablePadding ? 0 : '24px' }}
			>
				{children}
			</div>
			{footer && <ContentBlockFooter {...footer} />}
		</div>
	)
}
