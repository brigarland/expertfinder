import React, { memo, useState, useCallback } from 'react'
import { Checkbox } from 'office-ui-fabric-react'
import { IPerson } from '../../../api'
import { DegreeBadge, InfluenceBadge } from '../../Badges'
import { jsStyles } from './PersonCard.styles'
import styles from './PersonCard.module.scss'

export interface IPersonCardProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	person: IPerson
	/**
	 * Index of card rendered
	 */
	cardIndex: number
	/**
	 * Function to run onClick the entire card
	 */
	onClickCard?: ((i: number, id: string) => void) | undefined
	/**
	 * personCardMain classNames
	 */
	mainClassNames?: string
	/**
	 * Function to handle checkbox onChange
	 */
	onChangeCheckbox: (id: string, checked?: boolean) => void
}
export const PersonCard: React.FC<IPersonCardProps> = memo(
	({ person, cardIndex, onClickCard, mainClassNames, onChangeCheckbox }) => {
		const { function: func, organization, region, pageRank } = person
		const [checked, setChecked] = useState<boolean>(false)

		// TODO: Temporary random degree till calculated by API
		// const degree = useMemo(() => {
		// 	return Math.floor(Math.random() * 6) + 1
		// }, [])
		const degree = 1

		const handleCheckboxOnChange = useCallback(
			(ev, isChecked) => {
				onChangeCheckbox(person.id, isChecked)
				setChecked(isChecked)
			},
			[person, setChecked, onChangeCheckbox],
		)

		return (
			<div className={styles.personCardRoot}>
				<div
					onClick={
						onClickCard ? () => onClickCard(cardIndex, person.id) : () => {}
					}
					style={{ cursor: onClickCard ? 'pointer' : 'auto' }}
					className={
						styles.personCardMain + (mainClassNames && ' ' + mainClassNames)
					}
				>
					<div className={styles.title}>
						{func} in {organization}
						<span>{region} Region</span>
					</div>
					<div className={styles.degreeBadgeCnt}>
						<DegreeBadge value={degree} />
					</div>
				</div>
				<div className={styles.personCardFooter}>
					<div className={styles.influenceBadgeCnt}>
						<InfluenceBadge value={pageRank} />
					</div>
					<div className={styles.checkBoxCnt}>
						<Checkbox
							checked={checked}
							onChange={handleCheckboxOnChange}
							styles={jsStyles.customCheckbox}
						/>
					</div>
				</div>
			</div>
		)
	},
)
