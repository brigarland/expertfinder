import React, { useCallback } from 'react'
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react'
import styles from './MessageCard.module.scss'
import { IMessage, IPerson, unknownPerson } from '../../../api'

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
}) => {
	console.log('person: ', person)
	const getInitials = (name: string | undefined): string => {
		if (!name) return '?'
		const matches = name.match(/\b(\w)/g)
		return matches ? matches.join('') : '?'
	}

	return (
		<div className={styles.contentBlockRoot}>
			<Persona
				imageUrl={person.imageUrl}
				imageInitials={getInitials(person.name)}
				text={person.name}
				size={PersonaSize.size32}
				presence={PersonaPresence.none}
				hidePersonaDetails
			/>
		</div>
	)
}
