import React, { useState, useCallback, useEffect, memo } from 'react'
import { Label } from 'office-ui-fabric-react'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { TextField } from 'office-ui-fabric-react'
import { Skill, Project, FilterExpression, Employee } from '../../../api'
import { useTripwire } from '../../../hooks/useTripwire'
import { buildFilter } from './buildFilter'
import classnames from 'classnames'
import styles from './ExpertFilterPane.module.scss'
import { ExpandCollapsePane } from '../../ExpandCollapsePane'
import { ConnectionRequestActions } from './ConnectionRequestActions'
import { Input, Dropdown } from 'msteams-ui-components-react'
import { SidePanel, TagPicker } from '../../Shared'
// import { Input } from 'msteams-ui-components-react'

export interface ExpertFilterPaneProps {
	selectedEmployees: Employee[]
	onFilterChange: (expr: FilterExpression) => void
}

export const ExpertFilterPane: React.FC<ExpertFilterPaneProps> = memo(
	({ onFilterChange, selectedEmployees }) => {
		const projects = useProjects()
		const skills = useSkills()
		// const skillsOptions = []

		const [interacted, markInteracted] = useTripwire()
		const [organization, setOrganization] = useState<string | undefined>()
		const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
		const [selectedProjects, setSelectedProjects] = useState<Project[]>([])

		useEffect(() => {
			if (interacted) {
				onFilterChange(
					buildFilter(organization, selectedSkills, selectedProjects),
				)
			}
		}, [
			interacted,
			organization,
			selectedSkills,
			selectedProjects,
			onFilterChange,
		])

		const handleOrganizationChanged = useCallback(
			ev => {
				setOrganization(ev.target.value)
				markInteracted()
			},
			[setOrganization, markInteracted],
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
			<SidePanel headerText="Expert Finder">
				<div className="TextFieldCnt">
					<Input
						label="Organization"
						value={organization}
						onChange={handleOrganizationChanged}
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
			</SidePanel>
		)
	},
)
