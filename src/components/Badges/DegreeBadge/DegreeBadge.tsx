import React, { memo } from 'react'
import styles from './DegreeBadge.module.scss'

export interface IDegreeBadgeProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Influence value as a number between 0 and 100
	 */
	value: number
}
export const DegreeBadge: React.FC<IDegreeBadgeProps> = memo(({ value }) => {
	return (
		<div className={styles.degreeBadgeRoot}>
			<div className={styles.valueCnt}>
				{value}
				<sup>{getDegreeLetters(value)}</sup>
			</div>
		</div>
	)
})

const getDegreeLetters = (v: number): string => {
	return v === 1 ? 'st' : v === 2 ? 'nd' : v === 3 ? 'rd' : 'th'
}
