import React, { memo } from 'react'
import styles from './Pill.module.scss'

export interface IPillProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	text: string
}
export const Pill: React.FC<IPillProps> = memo(({ text }) => (
	<div className={styles.pillRoot}>
		<div className={styles.pill}>
			<div className={styles.textCnt}>{text}</div>
		</div>
	</div>
))
