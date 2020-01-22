import React from 'react'
import { SectionHeader } from '../../../Shared'
import { ColorPalette } from '../../../../styles'
import welcomeImage from '../images/recruiter-searching-cropped-01.svg'
import styles from './WelcomeBlock.module.scss'

// export enum WelcomeImages {
// 	Cactus = 'Cactus',
// }

export interface IWelcomeBlockProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Image for right side of welcome panel
	 */
	// image: WelcomeImages
	/**
	 * Text to show in the header of the component
	 */
	headerText: string
}

export const WelcomeBlock: React.FC<IWelcomeBlockProps> = ({
	// image,
	headerText,
	children,
}) => {
	return (
		<div className={styles.welcomeBlockRoot}>
			<div className={styles.profileHeaderCnt}>
				<SectionHeader
					text="My Profile"
					lineLength={100}
					lineColor={ColorPalette.mentorPrimary}
				/>
			</div>
			<div className={styles.welcomeCardCnt}>
				<div className={styles.welcomeCardWrapper}>
					<div className={styles.cardHeader}>
						<SectionHeader
							text={headerText}
							fontSize={36}
							lineLength={48}
							lineColor={ColorPalette.brand00}
						/>
					</div>
					<div className={styles.cardBody}>{children}</div>
				</div>
			</div>
			<div
				className={styles.welcomeImgCnt}
				style={{ backgroundImage: `url("${welcomeImage}")` }}
			/>
		</div>
	)
}
