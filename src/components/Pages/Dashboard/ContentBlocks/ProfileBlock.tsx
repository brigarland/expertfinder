import React from 'react'
import { useCurrentUser } from '../../../../hooks'
import { ColorPalette } from '../../../../styles'
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react'
import styles from './ProfileBlock.module.scss'

export const ProfileBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const friendlyName = (currentUser && currentUser.name) || 'Unknown'
	const friendlyTitle = (currentUser && currentUser.function) || 'Unknown Title'
	return (
		<div className={styles.profileBlockRoot}>
			<div className={styles.personaCnt}>
				<div className={styles.personaWrapper}>
					<Persona
						imageUrl={(currentUser && currentUser.imageUrl) || undefined}
						text={friendlyName}
						size={PersonaSize.size120}
						presence={PersonaPresence.none}
						hidePersonaDetails
					/>
				</div>
			</div>
			<div className={styles.textCnt}>
				<div className={styles.nameCnt}>{friendlyName}</div>
				<div className={styles.titleCnt}>{friendlyTitle}</div>
			</div>
			<div className={styles.badgesCnt}>
				<div className={styles.badgeCnt}>
					<div
						className={styles.tempBadge}
						style={{ backgroundColor: ColorPalette.mentorPrimary }}
					>
						Badge
					</div>
				</div>
				<div className={styles.badgeCnt}>
					<div
						className={styles.tempBadge}
						style={{ backgroundColor: ColorPalette.expertPrimary }}
					>
						Badge
					</div>
				</div>
				<div className={styles.badgeCnt}>
					<div
						className={styles.tempBadge}
						style={{ backgroundColor: ColorPalette.influencerPrimary }}
					>
						Badge
					</div>
				</div>
				<div className={styles.badgeCnt}>
					<div
						className={styles.tempBadge}
						style={{ backgroundColor: ColorPalette.brand06 }}
					>
						Badge
					</div>
				</div>
			</div>
		</div>
	)
}
