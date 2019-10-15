import React, { memo, useState } from 'react'
import { Page } from '../../Page'
import { ExpertFilterPane } from './ExpertFilterPane'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
import styles from './FindExperts.module.scss'
import { CheckableEmployeeCard } from './CheckableEmployeeCard'
import { Employee } from '../../../api'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
// import { microsoftTeams } from '@microsoft/teams-js' // doesn't work
// import { TeamsThemeContext, ThemeStyle } from 'msteams-ui-components-react'
// import { ThemeStyle, getContext } from 'msteams-ui-components-react'
import * as microsoftTeams from '@microsoft/teams-js'

export const FindExperts: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])
	// const [theme, setTheme] = useState(ThemeStyle.Light)
	// const [fontSize, setFontSize] = useState(16)
	const [upn, setUpn] = useState<any>('Nope')
	const currentUser = useCurrentUser()

	// useEffect(() => {
	// 	if (interacted) {
	// 		onFilterChange(
	// 			buildFilter(organization, selectedSkills, selectedProjects),
	// 		)
	// 	}
	// }, [])

	// const context = getContext({
	// 	baseFontSize: 16,
	// 	style: ThemeStyle.Light,
	// })
	// microsoftTeams.initialize()
	// microsoftTeams.getContext(context => {
	// 	setUpn(context.userPrincipalName)
	// })
	if (inTeams()) {
		microsoftTeams.initialize()
		microsoftTeams.getContext(context => {
			setUpn(context.userPrincipalName)
		})
	}
	// let contextStr = 'Nope'

	// if (context) {
	// 	contextStr = JSON.stringify(context)
	// }

	return (
		<Page name="Find Experts">
			<h1 style={{ display: 'none' }}>UPN: {upn}</h1>
			<ExpertFilterPane
				onFilterChange={handleFilterChanged}
				selectedEmployees={selectedEmployees}
			/>
			<div className={styles.resultsPane}>
				<div className={styles.gutter} />
				<div className={styles.results}>
					{employees
						.filter(e => !!(e && e.email))
						.filter(e => (currentUser ? e.email !== currentUser.email : true))
						.map(e => (
							<CheckableEmployeeCard
								key={e.id}
								employee={e}
								checked={selectedEmployees.some(s => s.email === e.email)}
								onCheckedChange={checked => {
									if (checked) {
										setSelectedEmployees([...selectedEmployees, e])
									} else {
										setSelectedEmployees(
											selectedEmployees.filter(s => s.email !== e.email),
										)
									}
								}}
							/>
						))}
				</div>
				<div className={styles.gutter} />
			</div>
		</Page>
	)
})

const inTeams = () => {
	try {
		return window.self !== window.top
	} catch (e) {
		return true
	}
}
