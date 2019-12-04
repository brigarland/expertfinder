import React, { memo, useState, useCallback } from 'react'
import { SearchPanel } from './SearchPanel'
import { SendRequestPanel } from './SendRequestPanel'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { ContentSection, PageSurface, SidePanel } from '../../Shared'
import { PersonCardCollection } from '../../PersonCardCollection'
import styles from './PeopleFinder.module.scss'

export const PeopleFinder: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	const [selectedEmployees, setSelectedEmployees] = useState<string[]>([])
	const currentUser = useCurrentUser()

	const handleCardSelection = useCallback(
		(id, checked) => {
			setSelectedEmployees(
				checked
					? [...selectedEmployees, id]
					: [selectedEmployees.filter(f => f !== id)],
			)
		},
		[selectedEmployees, setSelectedEmployees],
	)

	return (
		<PageSurface title="People Finder">
			<SidePanel headerText="People Finder">
				{!!selectedEmployees.length ? (
					<SendRequestPanel selectedEmployees={selectedEmployees} />
				) : (
					<SearchPanel
						onFilterChange={handleFilterChanged}
						selectedEmployees={selectedEmployees}
					/>
				)}
			</SidePanel>
			<ContentSection headerText="Results">
				<div className={styles.employeesCnt}>
					<PersonCardCollection
						personItems={employees
							.filter(e => !!(e && e.email))
							.filter(e =>
								currentUser ? e.email !== currentUser.email : true,
							)}
						handleCardSelection={handleCardSelection}
					/>
				</div>
			</ContentSection>
		</PageSurface>
	)
})
