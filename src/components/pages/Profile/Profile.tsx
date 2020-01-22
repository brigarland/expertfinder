import React from 'react'
import { IPerson } from '../../../api'
import { PageSurface, ContentBlock } from '../../Shared'
import { useCurrentUser } from '../../../hooks'
import { ProfileBlock, WelcomeBlock } from './ContentBlocks'
import skillsIcon from './images/skills-icon.svg'
import projectsIcon from './images/projects-icon-01.svg'
import certsIcon from './images/certifications-icon-01.svg'
import styles from './Profile.module.scss'

export const Profile: React.FC = () => {
	const currentUser = useCurrentUser()
	const currUserFirstName = getFirstName(currentUser)
	return (
		<PageSurface
			title="People Connector - My Profile"
			styles={{ padding: '14px' }}
		>
			<div className={styles.profileCnt}>
				<div className={styles.topSection}>
					<div className={styles.welcomeSection}>
						<WelcomeBlock headerText={`Welcome back, ${currUserFirstName}`}>
							<p>
								You've shown up in 46% more searches this month. Add more
								relavent skills, projects, and certifications to increase your
								opportunities for collaboration.
							</p>
						</WelcomeBlock>
					</div>
					<div className={styles.profileBaseSection}>
						<ContentBlock icon="Contact">
							<ProfileBlock />
						</ContentBlock>
					</div>
				</div>
				<div className={styles.btmSection}>
					<div className={styles.skillsSection}>
						<ContentBlock icon={skillsIcon} headerText="My Skills">
							Content
						</ContentBlock>
					</div>
					<div className={styles.projectsSection}>
						<ContentBlock icon={projectsIcon} headerText="My Projects">
							Content
						</ContentBlock>
					</div>
					<div className={styles.certsSection}>
						<ContentBlock icon={certsIcon} headerText="My Certifications">
							Content
						</ContentBlock>
					</div>
				</div>
			</div>
		</PageSurface>
	)
}

const getFirstName = (p: IPerson | null): string => {
	const f = p && p.name ? p.name : 'Jack Smith'
	const e = f.split(' ')
	return e[0]
}
