import React, { useState, useCallback, useEffect } from 'react'
import { useSkillsSearch, useTripwire } from '../../../../hooks'
import { ColorPalette } from '../../../../styles'
import { Pill, PillType } from '../../../Shared'
import { TextField } from 'office-ui-fabric-react'
import styles from './SkillsBlock.module.scss'

export const SkillsBlock: React.FC = () => {
	const skillsSearch = useSkillsSearch()
	const pillColorArray = [
		ColorPalette.brand04,
		ColorPalette.blueShade10,
		ColorPalette.orangeShade10,
		ColorPalette.greenShade10,
		ColorPalette.yellowShade10,
	]
	const [interacted, markInteracted] = useTripwire()

	const [userSkills, setUserSkills] = useState<string[]>([
		'TypeScript',
		'JavaScript',
		'Office UI Fabric React',
		'React',
		'CSS3',
		'HTML5',
		'Figma',
		'.NET',
		'C#',
		'Swift',
		'Azure DevOps',
		'Scrum',
		'SQL',
		'Wordpress',
	])
	const [suggestedSkills, setSuggestedSkills] = useState<string[]>([
		'Meteor',
		'Ionic',
		'PureMVC',
		'Kanban',
		'Python',
	])
	const [skillsSearchValue, setSkillsSearchValue] = useState<string>('')
	const [skillsSearchResults, setSkillsSearchResults] = useState<string[]>([])

	useEffect(() => {
		if (interacted) {
			const res = skillsSearchValue.length > 2 ? skillsSearch : []
			// TODO replace with array equalization
			if (res.length !== skillsSearchResults.length) setSkillsSearchResults(res)
		}
	}, [interacted, skillsSearchValue, skillsSearch, skillsSearchResults])

	const handleSkillsSearchChanged = useCallback(
		(ev, v) => {
			setSkillsSearchValue(v)
			markInteracted()
		},
		[markInteracted],
	)
	const handleSuggestedSkillAdded = useCallback(
		v => {
			const newUserSkills = [...userSkills]
			newUserSkills.push(v)
			setUserSkills(newUserSkills)
			setSuggestedSkills(suggestedSkills.filter(f => f !== v))
			markInteracted()
		},
		[userSkills, suggestedSkills, markInteracted],
	)
	const handleSkillDeleted = useCallback(
		v => {
			setSuggestedSkills(suggestedSkills.filter(f => f !== v))
			markInteracted()
		},
		[suggestedSkills, markInteracted],
	)

	return (
		<div className={styles.skillsBlockRoot}>
			<div className={styles.userSkillsCnt}>
				{userSkills.map((f, i) => (
					<Pill key={i} text={f} color={pillColorArray[i % 5]} />
				))}
			</div>
			<div className={styles.addSkillsFormCnt}>
				<h4 className={styles.formHeader}>Add Relevant Skills</h4>
				<div className="searchFieldCnt">
					<TextField
						// autoFocus
						placeholder="Search skills..."
						value={skillsSearchValue}
						onChange={handleSkillsSearchChanged}
					/>
				</div>
				<div className={styles.searchResultsCnt}>
					{skillsSearchResults.map(f => (
						<Pill text={f} type={PillType.Add} />
					))}
				</div>
			</div>
			<div className={styles.suggestedSkillsCnt}>
				<h4 className={styles.formHeader}>Suggested Skills</h4>
				<div className={styles.searchResultsCnt}>
					{suggestedSkills.map(f => (
						<Pill
							text={f}
							type={PillType.Suggestion}
							onDelete={handleSkillDeleted}
							onAdd={handleSuggestedSkillAdded}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
