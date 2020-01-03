import React, { useState, useEffect } from 'react'
import { IMessage, IPerson, unknownPerson, MessageContext } from '../../../api'
import { ColorPalette } from '../../../styles/ColorPalette'
import { IconBadge, BadgeIcon } from '../../Badges'
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react'
import moment from 'moment'
import styles from './MessageCard.module.scss'

export interface IMessageCardProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Message object with all the info to display
	 */
	message: IMessage
	/**
	 * Person info for the sender/recipient
	 */
	person?: IPerson
}

export const MessageCard: React.FC<IMessageCardProps> = ({
	message,
	person = unknownPerson,
	children,
}) => {
	const [contextColor, setContextColor] = useState<string>(ColorPalette.gray09)
	const [contextIcon, setContextIcon] = useState<JSX.Element>(<></>)

	// TODO: Need to build a date formatter like outlook

	useEffect(() => {
		switch (message.contextType) {
			case MessageContext.Mentor:
				setContextColor(ColorPalette.mentorPrimary)
				setContextIcon(<IconBadge icon={BadgeIcon.Mentor} text="Mentorship" />)
				break
			case MessageContext.Expert:
				setContextColor(ColorPalette.expertPrimary)
				setContextIcon(<IconBadge icon={BadgeIcon.Expert} text="Expertise" />)
				break
			case MessageContext.Influencer:
				setContextColor(ColorPalette.influencerPrimary)
				setContextIcon(
					<IconBadge icon={BadgeIcon.Influencer} text="Influence" />,
				)
				break
			default:
				break
		}
	}, [message.contextType])

	return (
		<div
			className={styles.messageCardRoot}
			style={{
				borderLeft: `3px solid ${contextColor}`,
			}}
		>
			<div className={styles.mcHeaderCnt}>
				<div className={styles.mcPersonaCnt}>
					<Persona
						imageUrl={person.imageUrl}
						imageInitials={getInitials(person.name)}
						text={person.name}
						size={PersonaSize.size32}
						presence={PersonaPresence.none}
						hidePersonaDetails
					/>
				</div>
				<div className={styles.mcTitleCnt}>
					<div className={styles.titleTop}>
						<div
							className={styles.nameCnt}
							style={{
								color: contextColor,
							}}
						>
							{person.name || '***************'}
						</div>
						{message.date && (
							<div className={styles.timeCnt}>
								{moment(message.date.toString()).format('ddd MM/DD')}
							</div>
						)}
					</div>
					<div
						className={styles.titleBtm}
					>{`${person.function}, ${person.organization}`}</div>
				</div>
				<div className={styles.mcIconCnt}>{contextIcon}</div>
			</div>
			<div className={styles.mcBodyCnt}>{message.messageBody}</div>
			<div className={styles.mcFooter}>{children}</div>
		</div>
	)
}

const getInitials = (name: string | undefined): string => {
	if (!name) return '?'
	const matches = name.match(/\b(\w)/g)
	return matches ? matches.join('') : '?'
}
