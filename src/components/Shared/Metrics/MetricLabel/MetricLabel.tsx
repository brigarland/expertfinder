import React from 'react'
import { MetricLabelFooter, IMetricLabelFooterProps } from './MetricLabelFooter'
import { ColorPalette } from '../../../../styles'
import styles from './MetricLabel.module.scss'

export interface IMetricLabelProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Set to true to disable highlight
	 */
	disableHighlight?: boolean
	/**
	 * color of top highlight
	 */
	highlightColor?: string
	/**
	 * Content for the optional footer
	 */
	footer?: IMetricLabelFooterProps
}

export const MetricLabel: React.FC<IMetricLabelProps> = ({
	disableHighlight,
	highlightColor = ColorPalette.gray02,
	footer,
	children,
}) => {
	return (
		<div className={styles.metricLabelRoot}>
			{!disableHighlight && (
				<div
					className={styles.highlight}
					style={{ borderColor: highlightColor }}
				/>
			)}
			<div className={styles.labelCnt}>{children}</div>
			{footer && <MetricLabelFooter {...footer} />}
		</div>
	)
}
