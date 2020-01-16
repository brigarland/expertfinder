import React, { Fragment, useCallback, useState, useEffect } from 'react'
import { IPerson, MessageContext } from '../../api'
import { PersonCard } from './PersonCard'
import { InfoPanel } from './InfoPanel'
import { ColorPalette } from '../../styles'
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
	/**
	 * Optional Selected Context
	 */
	selectedContext?: MessageContext
}

export const PersonCardCollection: React.FC<IPersonCardCollectionProps> = ({
	personItems,
	handleCardSelection,
	selectedContext,
}) => {
	const rowLength = 4

	const [activeCard, setActiveCard] = useState<number>(-1)
	const [activePerson, setActivePerson] = useState<IPerson>(emptyPerson)
	const [cardClasses, setCardClasses] = useState<string[]>([])
	const [infoPanelVis, setInfoPanelVis] = useState<boolean[]>([])
	const [customCardColor, setCustomCardColor] = useState<string>(
		ColorPalette.brand00,
	)

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
			console.log('infoTabsCount', infoTabsCount)
			console.log('infoTabIndex', infoTabIndex)
			for (let i = 0; i < infoTabsCount; i++) {
				newInfoPanelVis.push(infoTabIndex === i && !clearClasses ? false : true)
			}

			console.log('newInfoPanelVis', newInfoPanelVis)
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

	useEffect(() => {
		switch (selectedContext) {
			case MessageContext.Mentor:
				setCustomCardColor(ColorPalette.mentorPrimary)
				break
			case MessageContext.Expert:
				setCustomCardColor(ColorPalette.expertPrimary)
				break
			case MessageContext.Influencer:
				setCustomCardColor(ColorPalette.influencerPrimary)
				break
			default:
				break
		}
	}, [selectedContext, setCustomCardColor])

	const persontItemsLength = personItems.length

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
						customColor={customCardColor}
					/>
				)
				// console.log(i, infoPanelVis[Math.ceil(i / rowLength) - 1])
				console.log('i % rowLength', i % rowLength)
				if (i % rowLength === 3 || persontItemsLength === i + 1) {
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
}

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
