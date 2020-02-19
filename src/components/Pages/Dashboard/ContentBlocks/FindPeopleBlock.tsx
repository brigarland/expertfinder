import React from 'react'
import * as microsoftTeams from '@microsoft/teams-js'
import { IconBadge, BadgeIcon, BadgeSize } from '../../../Badges'
import { PrimaryButton } from '../../../Shared'
import styles from './FindPeopleBlock.module.scss'

export const FindPeopleBlock: React.FC = () => (
	<div className={styles.findPeopleBlockRoot}>
		<div className={styles.expertsCtaCard}>
			<div className={styles.badgeCnt}>
				<IconBadge
					icon={BadgeIcon.Expert}
					text="Experts"
					size={BadgeSize.Medium}
				/>
			</div>
			<div className={styles.textCnt}>
				Search for an expert in a specific set of skills and topics.
			</div>
			<div className={styles.btnCnt}>
				<PrimaryButton
					text="Find Experts"
					onClick={() =>
						microsoftTeams.executeDeepLink(
							'https://teams.microsoft.com/l/entity/97596332-5a53-45ec-b6ab-2b2c5ccf4b99/experts?webUrl=https://expertfinder-alpha-ux.azurewebsites.net/experts&label=People Finder&context={}',
						)
					}
				/>
			</div>
		</div>
		<div className={styles.influencersCtaCard}>
			<div className={styles.badgeCnt}>
				<IconBadge
					icon={BadgeIcon.Influencer}
					text="Influencers"
					size={BadgeSize.Medium}
				/>
			</div>
			<div className={styles.textCnt}>
				Search for someone well connected with other departments.
			</div>
			<div className={styles.btnCnt}>
				<PrimaryButton
					text="Find Influencers"
					onClick={() =>
						microsoftTeams.executeDeepLink(
							'https://teams.microsoft.com/l/entity/97596332-5a53-45ec-b6ab-2b2c5ccf4b99/experts?webUrl=https://expertfinder-alpha-ux.azurewebsites.net/experts&label=People Finder&context={}',
						)
					}
				/>
			</div>
		</div>
		<div className={styles.mentorsCtaCard}>
			<div className={styles.badgeCnt}>
				<IconBadge
					icon={BadgeIcon.Mentor}
					text="Mentors"
					size={BadgeSize.Medium}
				/>
			</div>
			<div className={styles.textCnt}>
				Search for someone who can help you navigate your professional
				development.
			</div>
			<div className={styles.btnCnt}>
				<PrimaryButton
					text="Find Mentors"
					onClick={() =>
						microsoftTeams.executeDeepLink(
							'https://teams.microsoft.com/l/entity/97596332-5a53-45ec-b6ab-2b2c5ccf4b99/experts?webUrl=https://expertfinder-alpha-ux.azurewebsites.net/experts&label=People Finder&context={}',
						)
					}
				/>
			</div>
		</div>
	</div>
)
