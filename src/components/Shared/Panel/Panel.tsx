import React from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './Panel.module.scss'
import jsStyles from './Panel.styles'

interface IPanelProps {
	fabricIcon?: string
	customIcon?: string
	title: string
	footerText?: string
	footerLink?: string
	width?: string
}

const Panel: React.FC<IPanelProps> = ({
	fabricIcon,
	customIcon,
	title,
	footerText,
	footerLink,
	width,
	children,
}) => {
	const dynamicStyles = jsStyles(width || '100%') //Default width of 100% if a width is not specified
	return (
		<div className={styles.dashboardPanel} style={dynamicStyles.dashboardPanel}>
			<section className={styles.panelHeader}>
				{(fabricIcon && (
					<Icon className={styles.icon} iconName={fabricIcon} />
				)) ||
					(customIcon && <img className={styles.icon} src={customIcon} />)}
				{title}
			</section>
			<div className={styles.panelContent}>{children}</div>
			<div className={styles.panelFooter}>
				{footerText && footerLink && (
					<a href={footerLink}>
						{footerText}{' '}
						<Icon className={styles.footerIcon} iconName="ChevronRightSmall" />
					</a>
				)}
			</div>
		</div>
	)
}

export default Panel
