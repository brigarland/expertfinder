import React, { Fragment, memo, useCallback, useState } from 'react'
import { IPerson } from '../../api'
import { PersonCard } from './PersonCard'
import { InfoPanel } from './InfoPanel'
import styles from './PersonCardCollection.module.scss'

export interface IPersonCardCollectionProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	personItems: IPerson[]
	/**
	 * Function to set the selected card ids as an array of strings
	 */
	handleCardSelection: (id: string, checked?: boolean) => void
}

export const PersonCardCollection: React.FC<IPersonCardCollectionProps> = memo(
	({ personItems, handleCardSelection }) => {
		const rowLength = 4

		const [activeCard, setActiveCard] = useState<number>(-1)
		const [activePerson, setActivePerson] = useState<IPerson>(emptyPerson)
		const [cardClasses, setCardClasses] = useState<string[]>([])
		const [infoPanelVis, setInfoPanelVis] = useState<boolean[]>([])

		// Manages the UI elements to activate and
		// deactivate cards
		const handleCardInteractions = useCallback(
			(cardIndex, clearClasses = false) => {
				// Cards
				const newCardClasses: string[] = [],
					newInfoPanelVis: boolean[] = []
				personItems.forEach((el, i) => {
					newCardClasses.push(
						cardIndex === i && !clearClasses ? 'activeCard' : '',
					)
				})
				setCardClasses(newCardClasses)
				// InfoPanels
				const infoTabsCount = Math.ceil(newCardClasses.length / rowLength),
					infoTabIndex = Math.floor(cardIndex / rowLength)
				for (let i = 0; i < infoTabsCount; i++) {
					newInfoPanelVis.push(
						infoTabIndex === i && !clearClasses ? false : true,
					)
				}
				setInfoPanelVis(newInfoPanelVis)
			},
			[personItems, setCardClasses, setInfoPanelVis],
		)

		const handleCardClick = useCallback(
			(i, id) => {
				if (activeCard === i) {
					handleCardInteractions(i, true)
					setActiveCard(-1)
					setActivePerson(emptyPerson)
				} else {
					handleCardInteractions(i)
					const p = personItems.filter(obj => obj.id === id)
					setActiveCard(i)
					setActivePerson(p.length ? p[0] : emptyPerson)
				}
			},
			[
				activeCard,
				setActiveCard,
				setActivePerson,
				personItems,
				handleCardInteractions,
			],
		)

		return (
			<div className={styles.personCardCollectionRoot}>
				{personItems.map((e, i) => {
					const card = (
						<PersonCard
							key={e.id}
							cardIndex={i}
							person={e}
							onClickCard={handleCardClick}
							mainClassNames={cardClasses[i] || ''}
							onChangeCheckbox={handleCardSelection}
						/>
					)
					if (rowLength % i) {
						return (
							<Fragment key={e.id + 1000}>
								{card}
								<InfoPanel
									person={activePerson}
									hidden={infoPanelVis[Math.ceil(i / rowLength) - 1]}
								/>
							</Fragment>
						)
					}
					return card
				})}
			</div>
		)
	},
)

const emptyPerson = {
	id: '',
	email: '',
	function: '',
	organization: '',
	region: '',
	skills: [],
	projects: [],
	topics: [],
	eigenCentrality: 0,
	betweenness: 0,
	pageRank: 0,
	_rid: '',
	_self: '',
	_etag: '',
	_attachments: '',
	_ts: 0,
}
