import React, { useState, useCallback, memo, useEffect } from 'react'
import {
	ContentSection,
	SidePanel,
	PageSurface,
	Pill,
	PillIcon,
	PillFill,
} from '../../Shared'
import { Input } from 'msteams-ui-components-react'
import { useSkillsSearch, useTripwire, useUserSkills } from '../../../hooks'
import styles from './SkillsMarketplace.module.scss'

export const SkillsMarketplace: React.FC = memo(() => {
	const [interacted, markInteracted] = useTripwire()
	const [userSkills, setUserSkills] = useState<string[]>([])
	const [skillsSearchValue, setSkillsSearchValue] = useState<string>('')
	const [skillsSearchResults, setSkillsSearchResults] = useState<string[]>([])

	useEffect(() => {
		const v = useUserSkills()
		setUserSkills(v)
	}, [setUserSkills])

	useEffect(() => {
		if (interacted) {
			const res = skillsSearchValue.length > 2 ? useSkillsSearch() : []
			setSkillsSearchResults(res)
		}
	}, [interacted, skillsSearchValue, setSkillsSearchResults])

	const handleSkillsSearchChanged = useCallback(
		ev => {
			setSkillsSearchValue(ev.target.value)
			markInteracted()
		},
		[setSkillsSearchValue, markInteracted],
	)

	return (
		<PageSurface title="Skills Marketplace">
			<SidePanel headerText="Edit Your Skills">
				<div className="searchFieldCnt">
					<Input
						autoFocus
						placeholder="Search skills..."
						value={skillsSearchValue}
						onChange={handleSkillsSearchChanged}
					/>
				</div>
				<div className={styles.searchResultsCnt}>
					{skillsSearchResults.map(f => (
						<Pill text={f} icon={PillIcon.add} fill={PillFill.border} />
					))}
				</div>
			</SidePanel>
			<ContentSection headerText="Your Skills">
				<div className={styles.searchResultsCnt}>
					{userSkills.map(f => (
						<Pill text={f} />
					))}
				</div>
			</ContentSection>
		</PageSurface>
	)
})
