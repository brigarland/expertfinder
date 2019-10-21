import React, { memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
// import styles from './Pill.module.scss'
import { jsStyles } from './Pill.styles'

export enum PillIcon {
	add = 'add',
	remove = 'remove',
	done = 'done',
}
export enum PillFill {
	solid = 'solid',
	border = 'border',
}

export interface IPillProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	text: string
	/**
	 * Icon of pill: add | remove | done (use PillIcon)
	 */
	icon?: PillIcon
	/**
	 * Color fill of pill: solid | border | done (use PillFill)
	 */
	fill?: PillFill
}
export const Pill: React.FC<IPillProps> = memo(
	({ text, icon = PillIcon.done, fill = PillFill.solid }) => {
		const isSolid = !!(fill === PillFill.solid)
		const iconStr =
			icon === PillIcon.add
				? 'AddTo'
				: icon === PillIcon.remove
				? 'StatusCircleBlock'
				: 'CheckMark'
		const styles = jsStyles(isSolid, iconStr)

		return (
			<div style={styles.pillRoot}>
				<div style={styles.pill}>
					<div style={styles.iconCnt}>
						<Icon iconName={iconStr} style={styles.icon} />
					</div>
					<div style={styles.textCnt}>{text}</div>
				</div>
			</div>
		)
	},
)
