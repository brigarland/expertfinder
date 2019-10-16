import React, { useState, useCallback, memo, useEffect } from 'react'
import { ContentSection, SidePanel, PageSurface, Pill } from '../../Shared'
import { Input } from 'msteams-ui-components-react'
import { useSkillsSearch, useTripwire } from '../../../hooks'
import styles from './SkillsMarketplace.module.scss'

export const SkillsMarketplace: React.FC = memo(() => {
	const blurbText =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

	const [interacted, markInteracted] = useTripwire()
	const [skillsSearchValue, setSkillsSearchValue] = useState<string>('')
	const [skillsSearchResults, setSkillsSearchResults] = useState<string[]>([])

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
			<SidePanel headerText="Edit Your Skills" blurbText={blurbText}>
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
						<Pill text={f} />
					))}
				</div>
			</SidePanel>
			<ContentSection headerText="Your Skills"></ContentSection>
		</PageSurface>
	)
})
