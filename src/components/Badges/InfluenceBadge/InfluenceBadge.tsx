import React, { memo } from 'react'
import icon from './influence.svg'
import styles from './InfluenceBadge.module.scss'

export interface IInfluenceBadgeProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Influence value as a number between 0 and 100
	 */
	value: number
}
export const InfluenceBadge: React.FC<IInfluenceBadgeProps> = memo(
	({ value }) => (
		<div className={styles.influenceBadgeRoot}>
			<div className={styles.IconCnt}>
				<img src={icon} height="25" width="25" alt="Influencer Score Icon" />
			</div>
			<div className={styles.valueCnt}>{value}</div>
		</div>
	),
)
