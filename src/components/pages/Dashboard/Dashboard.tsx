import React from 'react'
import { PageSurface, ContentBlock } from '../../Shared'
import styles from './Dashboard.module.scss'
// import SkillsIcon from '../../../images/skills-icon.svg'

export const Dashboard: React.FC = () => {
	return (
		<PageSurface
			title="People Connector Dashboard"
			styles={{ padding: '14px' }}
		>
			<div className={styles.dashLeftAside}>
				<ContentBlock
					icon="Search"
					headerText="Skills, Certifications, &amp; Projects"
					footer={{
						text: 'Find People',
						link: '#',
					}}
				>
					Content
				</ContentBlock>
			</div>
			<div className={styles.dashCentralContent}>
				<ContentBlock
					icon="Search"
					headerText="Skills, Certifications, &amp; Projects"
					footer={{
						text: 'See All Kudos',
						link: '#',
					}}
				>
					Content
				</ContentBlock>
			</div>
			<div className={styles.dashRightAside}>
				<ContentBlock
					icon="Search"
					headerText="Skills, Certifications, &amp; Projects"
				>
					Content
				</ContentBlock>
			</div>
		</PageSurface>
	)
}
