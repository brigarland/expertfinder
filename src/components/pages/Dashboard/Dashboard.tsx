import React from 'react'
import {
	DonutChart,
	PageSurface,
	ContentBlock,
	MetricLabel,
} from '../../Shared'
import {
	FindPeopleBlock,
	IncomingRequestsBlock,
	OutgoingRequestsBlock,
	SuggestedKudosBlock,
	ReceivedKudosBlock,
	StatisticsBlock,
} from './ContentBlocks'
import { ColorPalette } from '../../../styles'
import styles from './Dashboard.module.scss'

export const Dashboard: React.FC = () => {
	return (
		<PageSurface
			title="People Connector Dashboard"
			styles={{ padding: '14px' }}
		>
			<div className={styles.dashLeftAside}>
				<ContentBlock
					icon="ProfileSearch"
					headerText="Find People"
					footer={{
						text: 'Find People',
						link: '#',
					}}
				>
					<FindPeopleBlock />
				</ContentBlock>
			</div>
			<div className={styles.dashCentralContent}>
				<div className={styles.requestsCnt}>
					<div className={styles.incomingCnt}>
						<ContentBlock
							icon="InboxCheck"
							headerText="Incoming Requests"
							footer={{
								text: 'See All Requests',
								link: '#',
							}}
						>
							<IncomingRequestsBlock />
						</ContentBlock>
					</div>
					<div className={styles.outgoingCnt}>
						<ContentBlock
							icon="Send"
							headerText="Outgoing Requests"
							footer={{
								text: 'See All Requests',
								link: '#',
							}}
						>
							<OutgoingRequestsBlock />
						</ContentBlock>
					</div>
				</div>
				<div className={styles.kudosCnt}>
					<ContentBlock
						icon="Like"
						headerText="Kudos"
						footer={{
							text: 'See All Kudos',
							link: '#',
						}}
					>
						<div className={styles.allKudosCnt}>
							<div className={styles.suggestedKudosCnt}>
								<h3>Send Kudos</h3>
								<SuggestedKudosBlock />
							</div>
							<div className={styles.receivedKudosCnt}>
								<h3>Received Kudos</h3>
								<ReceivedKudosBlock />
							</div>
						</div>
					</ContentBlock>
				</div>
			</div>
			<div className={styles.dashRightAside}>
				<div className={styles.topCnt}>
					<div className={styles.profileCnt}>
						<ContentBlock icon="Contact" headerText="Profile">
							Content
						</ContentBlock>
					</div>
					<div className={styles.highlightCnt}>
						<ContentBlock
							icon="Certificate"
							headerText="Skills, Certifications, &amp; Projects"
						>
							<div className={styles.metricHighlightCnt}>
								<div className={styles.chartCnt}>
									<DonutChart
										value={67}
										strokeColor={ColorPalette.brand04}
										textColor={ColorPalette.brand06}
									/>
								</div>
								<div className={styles.labelCnt}>
									<MetricLabel
										highlightColor={ColorPalette.mentorPrimary}
										footer={{
											text: 'Learn More',
											link: '#',
										}}
									>
										67% of Contoso Marketing Managers have their Professional
										Analytics Certification
									</MetricLabel>
								</div>
							</div>
						</ContentBlock>
					</div>
				</div>
				<div className={styles.metricsCnt}>
					<ContentBlock icon="Flow" headerText="Your Connections">
						<StatisticsBlock />
					</ContentBlock>
				</div>
			</div>
		</PageSurface>
	)
}
