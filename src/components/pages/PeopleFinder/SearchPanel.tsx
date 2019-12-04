import React, { useState, useCallback, useEffect, memo } from 'react'
import { useProjects, useSkills, useOrgs, useTripwire } from '../../../hooks'
import { Skill, Project, Org, FilterExpression } from '../../../api'
import { buildFilter } from './buildFilter'
import { Dropdown } from 'msteams-ui-components-react'
import styles from './SearchPanel.module.scss'
import { TagPicker } from '../../Shared'

export interface SearchPanelProps {
	selectedEmployees: string[]
	onFilterChange: (expr: FilterExpression) => void
}

export const SearchPanel: React.FC<SearchPanelProps> = memo(
	({ onFilterChange, selectedEmployees }) => {
		const projects = useProjects()
		const skills = useSkills()
		const orgs = useOrgs()

		const [interacted, markInteracted] = useTripwire()
		const [selectedFinder, setSelectedFinder] = useState<string>('Find Experts')
		const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
		const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
		const [selectedOrgs, setSelectedOrgs] = useState<Org[]>([])

		useEffect(() => {
			if (interacted) {
				onFilterChange(
					buildFilter(selectedOrgs, selectedSkills, selectedProjects),
				)
			}
		}, [
			interacted,
			selectedOrgs,
			selectedSkills,
			selectedProjects,
			onFilterChange,
		])

		const handleFinderChanged = useCallback(
			v => {
				console.log('this thing: ', v)
				setSelectedFinder(v)
			},
			[setSelectedFinder],
		)

		const handleOrganizationChanged = useCallback(
			v => {
				setSelectedOrgs(v)
				markInteracted()
			},
			[setSelectedOrgs, markInteracted],
		)

		const handleSkillsChanged = useCallback(
			v => {
				setSelectedSkills(v)
				markInteracted()
			},
			[setSelectedSkills, markInteracted],
		)

		const handleProjectsChanged = useCallback(
			v => {
				setSelectedProjects(v)
				markInteracted()
			},
			[setSelectedProjects, markInteracted],
		)

		return (
			<div className="searchCnt">
				<div className={styles.dropdownCnt}>
					<Dropdown
						menuRightAlign
						mainButtonText={selectedFinder}
						// label="I'm a label"
						style={{ width: '100%' }}
						selected={selectedFinder}
						items={[
							{
								text: 'Find Experts',
								onClick: () => handleFinderChanged('Find Experts'),
							},
							{
								text: 'Find Influencers',
								onClick: () => handleFinderChanged('Find Influencers'),
							},
							{
								text: 'Find Mentors',
								onClick: () => handleFinderChanged('Find Mentors'),
							},
						]}
					/>
				</div>
				<div className={styles.tagPickerCnt}>
					<TagPicker
						items={orgs}
						itemsGroupTitle="organizations"
						label="Organization"
						selectedItems={selectedOrgs}
						onSelectionChanged={handleOrganizationChanged}
					/>
				</div>
				<div className={styles.tagPickerCnt}>
					<TagPicker
						items={skills}
						itemsGroupTitle="skills"
						label="Relevant Skills"
						selectedItems={selectedSkills}
						onSelectionChanged={handleSkillsChanged}
					/>
				</div>
				<div className={styles.tagPickerCnt}>
					<TagPicker
						items={projects}
						label="Project Involvement"
						selectedItems={selectedProjects}
						onSelectionChanged={handleProjectsChanged}
					/>
				</div>
			</div>
		)
	},
)
