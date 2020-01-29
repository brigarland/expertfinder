import React from 'react'
import { ColorPalette } from '../../../../styles'
import styles from './DonutChart.module.scss'

export interface IDonutChartProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * value the chart should show
	 */
	value?: number
	/**
	 * label for the chart
	 */
	valueLabel?: string
	/**
	 * diameter of chart
	 */
	size?: number
	/**
	 * width of chart line
	 */
	strokeWidth?: number
	/**
	 * color of chart line
	 */
	strokeColor?: string
	/**
	 * color of percent label
	 */
	textColor?: string
}

export const DonutChart: React.FC<IDonutChartProps> = ({
	value = 0,
	valueLabel,
	size = 116,
	strokeWidth = 3,
	strokeColor = ColorPalette.gray02,
	textColor = ColorPalette.gray03,
}) => {
	const halfsize = size * 0.5
	const radius = halfsize - strokeWidth * 0.5
	const circumference = 2 * Math.PI * radius
	const strokeval = (value * circumference) / 100
	const dashval = strokeval + ' ' + circumference

	const trackstyle = { strokeWidth: strokeWidth }
	const indicatorstyle = {
		stroke: strokeColor,
		strokeWidth: strokeWidth,
		strokeDasharray: dashval,
	}
	const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')'

	return (
		<svg width={size} height={size} className={styles.donutchart}>
			<circle
				r={radius}
				cx={halfsize}
				cy={halfsize}
				transform={rotateval}
				style={trackstyle}
				className={styles.donutChartTrack}
			/>
			<circle
				r={radius}
				cx={halfsize}
				cy={halfsize}
				transform={rotateval}
				style={indicatorstyle}
				className={styles.donutChartIndicator}
			/>
			<text
				className={styles.donutChartText}
				x={halfsize}
				y={valueLabel ? halfsize : halfsize * 1.2}
				style={{ textAnchor: 'middle' }}
			>
				<tspan className={styles.donutchartTextVal}>{value}</tspan>
				<tspan
					className={styles.donutchartTextPercent}
					style={{ color: textColor }}
				>
					%
				</tspan>
				{valueLabel && (
					<tspan
						className={styles.donutchartTextLabel}
						x={halfsize}
						y={halfsize + 10}
					>
						{valueLabel}
					</tspan>
				)}
			</text>
		</svg>
	)
}
