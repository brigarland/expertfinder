import React, { useState, useCallback, useEffect } from 'react'
import { useProjects, useSkills, useOrgs, useTripwire } from '../../../hooks'
import {
	Skill,
	Project,
	Org,
	BooleanExpression,
	MessageContext,
} from '../../../api'
import { buildFilter } from './buildFilter'
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react'
import styles from './SearchPanel.module.scss'
import { TagPicker } from '../../Shared'

export interface SearchPanelProps {
	onFilterChange: (expr: BooleanExpression) => void
	handleFinderChanged: (
		event: React.FormEvent<HTMLDivElement>,
		option?: IDropdownOption,
		index?: number,
	) => void
	selectedFinder: MessageContext
}

export const SearchPanel: React.FC<SearchPanelProps> = ({
	onFilterChange,
	handleFinderChanged,
	selectedFinder,
}) => {
	const projects = useProjects()
	const skills = useSkills()
	const orgs = useOrgs()

	const [interacted, markInteracted] = useTripwire()
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
					selectedKey={selectedFinder}
					options={[
						{ key: MessageContext.Expert, text: 'Find Experts' },
						{ key: MessageContext.Influencer, text: 'Find Influencers' },
						{ key: MessageContext.Mentor, text: 'Find Mentors' },
					]}
					onChange={handleFinderChanged}
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
}
