import React, { useState, useCallback } from 'react'
import { MessageContext } from '../../../api'
import { SearchPanel } from './SearchPanel'
import { SendRequestPanel } from './SendRequestPanel'
import { usePeopleFilter } from '../../../hooks/usePeopleFilter'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { ContentSection, PageSurface, SidePanel } from '../../Shared'
import { PersonCardCollection } from '../../PersonCardCollection'
import bgImage from './images/find-people-spotlight.svg'
import bgHeaderImage from './images/start-your-search.svg'
import styles from './PeopleFinder.module.scss'

export const PeopleFinder: React.FC = () => {
	const [employees, handleFilterChanged] = usePeopleFilter()
	const [selectedEmployees, setSelectedEmployees] = useState<string[]>([])
	const [selectedFinder, setSelectedFinder] = useState<MessageContext>(
		MessageContext.Expert,
	)
	const currentUser = useCurrentUser()

	const handleFinderChanged = useCallback(
		(ev, v) => {
			setSelectedFinder(v.key)
		},
		[setSelectedFinder],
	)

	const handleCardSelection = useCallback(
		(id, checked) => {
			setSelectedEmployees(
				checked
					? [...selectedEmployees, id]
					: selectedEmployees.filter(f => f !== id),
			)
		},
		[selectedEmployees, setSelectedEmployees],
	)

	return (
		<PageSurface title="People Finder" styles={{ padding: '14px' }}>
			<SidePanel headerText="Find People" icon="ProfileSearch">
				{!!selectedEmployees.length ? (
					<SendRequestPanel selectedEmployees={selectedEmployees} />
				) : (
					<SearchPanel
						onFilterChange={handleFilterChanged}
						handleFinderChanged={handleFinderChanged}
						selectedFinder={selectedFinder}
					/>
				)}
			</SidePanel>
			<ContentSection>
				{!employees.length ? (
					<div
						className={styles.employeesCntEmpty}
						style={{
							backgroundImage: `url("${bgImage}")`,
						}}
					>
						<div
							className={styles.emptyHeader}
							style={{
								backgroundImage: `url("${bgHeaderImage}")`,
							}}
						/>
					</div>
				) : (
					<div className={styles.employeesCnt}>
						<PersonCardCollection
							personItems={employees
								.filter(e => !!(e && e.email))
								.filter(e =>
									currentUser ? e.email !== currentUser.email : true,
								)}
							handleCardSelection={handleCardSelection}
							selectedContext={selectedFinder}
						/>
					</div>
				)}
			</ContentSection>
		</PageSurface>
	)
}
