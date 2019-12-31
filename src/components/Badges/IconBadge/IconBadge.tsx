import React from 'react'
// import styles from './IconBadge.module.scss'
import expertSvg from './images/experts-icon.svg'
import influencerSvg from './images/influencers-icon.svg'
import mentorSvg from './images/mentors-icon.svg'
import { jsStyles } from './IconBadge.styles'

export enum BadgeIcon {
	Expert = 'expert',
	Influencer = 'influencer',
	Mentor = 'mentor',
}

export enum BadgeSize {
	Small = 20,
	Medium = 35,
}

const badgeValues = {
	expert: {
		badgeIcon: expertSvg,
		defaultText: 'Expert',
		color: '#5dab75',
	},
	influencer: {
		badgeIcon: influencerSvg,
		defaultText: 'Expert',
		color: '#ab825d',
	},
	mentor: {
		badgeIcon: mentorSvg,
		defaultText: 'Expert',
		color: '#5da0ab',
	},
}

export interface IIconBadgeProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Icon for badge using enum BadgeIcon
	 */
	icon: BadgeIcon
	/**
	 * Text below Icon
	 */
	text?: string
	/**
	 * Size of icon - font size will adjust to fit
	 */
	size?: BadgeSize
}
export const IconBadge: React.FC<IIconBadgeProps> = ({
	icon,
	text,
	size = BadgeSize.Small,
}) => {
	const { badgeIcon, defaultText, color } = badgeValues[icon]
	const styles = jsStyles(color, size === BadgeSize.Small)
	return (
		<div>
			<div style={styles.iconCnt}>
				<img
					src={badgeIcon}
					height={size}
					width={size}
					alt={`${text || defaultText} icon`}
				/>
			</div>
			<div style={styles.txtCnt}>{text}</div>
		</div>
	)
}
