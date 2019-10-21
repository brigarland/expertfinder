import React, { memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './Card.module.scss'

export interface ICardProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	text: string
}
export const Card: React.FC<ICardProps> = memo(({ text }) => (
	<div className={styles.cardRoot}>
		<div className={styles.card}>
			<div className={styles.IconCnt}>
				<Icon iconName="AddTo" />
			</div>
			<div className={styles.textCnt}>{text}</div>
		</div>
	</div>
))
