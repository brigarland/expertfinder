import React from 'react'
import { MetricLabel } from '../MetricLabel'
import { Icon } from 'office-ui-fabric-react'
import { ColorPalette } from '../../../../styles'
import styles from './TrendMetric.module.scss'

export interface ITrendMetricProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * value of trend
	 */
	value: number | string
	/**
	 * is the trend down
	 * (if false or undefined the trend will be positive)
	 */
	isNegative?: boolean
	/**
	 * Set to true to disable highlight on label
	 */
	disableHighlight?: boolean
	/**
	 * color of top highlight on label
	 */
	highlightColor?: string
}

export const TrendMetric: React.FC<ITrendMetricProps> = ({
	value,
	isNegative,
	disableHighlight,
	highlightColor,
	// text,
	children,
}) => {
	return (
		<div className={styles.metricHighlightCnt}>
			<div className={styles.trendCnt}>
				<div className={styles.iconCnt}>
					<Icon
						iconName={isNegative ? 'CaretSolidDown' : 'CaretSolidUp'}
						styles={{
							root: {
								color: isNegative
									? ColorPalette.red06
									: ColorPalette.expertPrimary,
							},
						}}
					/>
				</div>
				<div className={styles.numberCnt}>{value}</div>
			</div>
			<div className={styles.labelCnt}>
				<MetricLabel
					disableHighlight={disableHighlight}
					highlightColor={highlightColor}
				>
					{children}
				</MetricLabel>
			</div>
		</div>
	)
}
//CaretSolidUp
