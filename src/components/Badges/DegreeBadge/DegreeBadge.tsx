import React, { memo } from 'react'
import styles from './DegreeBadge.module.scss'

export interface IDegreeBadgeProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Influence value as a number between 0 and 100
	 */
	value: number
	/**
	 * Optional Custom Color
	 */
	customColor?: string
}
export const DegreeBadge: React.FC<IDegreeBadgeProps> = memo(
	({ value, customColor }) => {
		return (
			<div
				className={styles.degreeBadgeRoot}
				style={{ borderColor: customColor }}
			>
				<div className={styles.valueCnt} style={{ color: customColor }}>
					{value}
					<sup>{getDegreeLetters(value)}</sup>
				</div>
			</div>
		)
	},
)

const getDegreeLetters = (v: number): string => {
	return v === 1 ? 'st' : v === 2 ? 'nd' : v === 3 ? 'rd' : 'th'
}
