import React from 'react'
import {
	Persona,
	IPersonaSharedProps,
	PersonaSize,
} from 'office-ui-fabric-react'
import { PrimaryButton, SecondaryButton } from 'msteams-ui-components-react'
import { IConnectionRequest } from '../../../api'
import styles from './Dashboard.module.scss'

interface IDashboardRequestProps extends React.AllHTMLAttributes<HTMLElement> {
	message: IConnectionRequest
}

// const examplePersona: IPersonaSharedProps = {
// 	imageUrl:
// 		'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
// 	imageInitials: 'AL',
// 	text: 'Annie Lindqvist',
// 	secondaryText: 'Software Engineer',
// 	tertiaryText: 'In a meeting',
// 	optionalText: 'Available at 4:00pm',
// }

const DashboardRequest: React.FC<IDashboardRequestProps> = ({ message }) => {
	const {
		name,
		title,
		company,
		body,
		requestType,
		imageInitials,
		imageUrl,
	} = message
	return (
		<div className={styles.dashboardRequest}>
			{title}
			<div className={styles.requestHeader}>
				<Persona
					text={name}
					secondaryText={`${title}, ${company}`}
					size={PersonaSize.size48}
				/>
			</div>
			<div className={styles.buttons}>
				<SecondaryButton>Deny</SecondaryButton>
				<PrimaryButton>Refer</PrimaryButton>
				<PrimaryButton>Accept</PrimaryButton>
			</div>
		</div>
	)
}

export default DashboardRequest
