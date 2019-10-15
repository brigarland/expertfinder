import React, { useState, useCallback, memo } from 'react'
import { SidePanel, PageSurface } from '../../Shared'
// import { useSkills } from '../../../hooks/useSkills'
import { Input } from 'msteams-ui-components-react'
import { useTripwire } from '../../../hooks'
// import styles from './SkillsMarketplace.module.scss'

export const SkillsMarketplace: React.FC = memo(() => {
	// const skills = useSkills()
	// const yourSkills = ['Python', 'React', 'Perl', 'C#', 'Leadership']
	const blurbText =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

	// const [userSkills, setUserSkills] = useState(yourSkills)

	const [interacted, markInteracted] = useTripwire()
	const [skillsSearchValue, setSkillsSearchValue] = useState('')
	const [skillsSearchResults, setSkillsSearchResults] = useState([
		['React', 'Redux', 'Office UI Fabric React', 'React.js', 'React DOM'],
	])

	const handleSkillsSearchChanged = useCallback(
		ev => {
			setSkillsSearchValue(ev.target.value)
			markInteracted()
		},
		[setSkillsSearchValue, markInteracted],
	)

	return (
		<PageSurface title="Skills Marketplace">
			<SidePanel headerText="Edit Your Skills" blurbText={blurbText}>
				<Input
					autoFocus
					// style={styles.input}
					placeholder="Enter a skill..."
					label="Search Skills"
					// errorLabel={!this.state.value ? "This value is required" : null}
					value={skillsSearchValue}
					onChange={handleSkillsSearchChanged}
				/>
			</SidePanel>
		</PageSurface>
	)
})
