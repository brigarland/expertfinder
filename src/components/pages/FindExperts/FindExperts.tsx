import React, { memo, useState } from 'react'
import { ExpertFilterPane } from './ExpertFilterPane'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
// import { CheckableEmployeeCard } from './CheckableEmployeeCard'
import { Employee } from '../../../api'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
// import { ConnectionRequestActions } from './ConnectionRequestActions'
import { ContentSection, PageSurface } from '../../Shared'
// import { PersonCard } from '../../PersonCard'
import { PersonCardCollection } from '../../PersonCardCollection'
import styles from './FindExperts.module.scss'

export const FindExperts: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	const [selectedEmployees] = useState<Employee[]>([])
	const currentUser = useCurrentUser()

	return (
		<PageSurface title="Expert Finder">
			<ExpertFilterPane
				onFilterChange={handleFilterChanged}
				selectedEmployees={selectedEmployees}
			/>
			<ContentSection headerText="Expert Results">
				<div className={styles.employeesCnt}>
					<PersonCardCollection
						personItems={employees
							.filter(e => !!(e && e.email))
							.filter(e =>
								currentUser ? e.email !== currentUser.email : true,
							)}
					/>
				</div>
			</ContentSection>
			{/* <ConnectionRequestActions employees={selectedEmployees} /> */}
		</PageSurface>
	)

	// return (
	// 	<Page name="Find Experts">
	// 		<h1 style={{ display: 'none' }}>UPN: {upn}</h1>
	// 		<ExpertFilterPane
	// 			onFilterChange={handleFilterChanged}
	// 			selectedEmployees={selectedEmployees}
	// 		/>
	// 		<div className={styles.resultsPane}>
	// 			<div className={styles.gutter} />
	// 			<div className={styles.results}>
	// {employees
	// 	.filter(e => !!(e && e.email))
	// 	.filter(e => (currentUser ? e.email !== currentUser.email : true))
	// 	.map(e => (
	// 		<CheckableEmployeeCard
	// 			key={e.id}
	// 			employee={e}
	// 			checked={selectedEmployees.some(s => s.email === e.email)}
	// 			onCheckedChange={checked => {
	// 				if (checked) {
	// 					setSelectedEmployees([...selectedEmployees, e])
	// 				} else {
	// 					setSelectedEmployees(
	// 						selectedEmployees.filter(s => s.email !== e.email),
	// 					)
	// 				}
	// 			}}
	// 		/>
	// 	))}
	// 			</div>
	// 			<div className={styles.gutter} />
	// 		</div>
	// 	</Page>
	// )
})

// const inTeams = () => {
// 	try {
// 		return window.self !== window.top
// 	} catch (e) {
// 		return true
// 	}
// }
