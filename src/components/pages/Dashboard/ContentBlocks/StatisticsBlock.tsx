import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { TrendMetric } from '../../../Shared'
import { ColorPalette } from '../../../../styles'
import styles from './StatisticsBlock.module.scss'

export const StatisticsBlock: React.FC = () => {
	const lineChartOptions: any = {
		chart: {
			height: 150,
		},
		credits: {
			enabled: false,
		},
		title: {
			text: '',
		},
		subtitle: {
			text: '',
		},
		xAxis: {
			categories: [
				'4/19',
				'5/19',
				'6/19',
				'7/19',
				'8/19',
				'9/19',
				'10/19',
				'11/19',
				'12/19',
			],
		},
		yAxis: {
			title: {
				enabled: false,
			},
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			series: {
				color: ColorPalette.expertPrimary,
			},
			line: {
				marker: {
					enabled: false,
				},
			},
		},
		series: [
			{
				name: 'Monthly Connections',
				data: [150, 280, 125, 102, 190, 385, 105, 205, 250],
			},
		],
	}

	return (
		<div className={styles.statisticsBlockRoot}>
			<h3 className={styles.chartHeader}>
				Your number of connections within Contoso
			</h3>
			<div className={styles.chartCnt}>
				<HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
			</div>
			<div className={styles.topTrend}>
				<TrendMetric value="14%" highlightColor={ColorPalette.brand06}>
					Your connections are up 14% in the last 6 months.
				</TrendMetric>
			</div>
			<div className={styles.btmTrend}>
				<TrendMetric
					value="21%"
					highlightColor={ColorPalette.influencerPrimary}
				>
					You are showing up in 21% more search results from your new
					connections
				</TrendMetric>
			</div>
		</div>
	)
}
