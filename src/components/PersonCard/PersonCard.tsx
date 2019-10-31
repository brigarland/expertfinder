import React, { memo, useMemo, useState } from 'react'
import { Checkbox } from 'office-ui-fabric-react'
import { IPerson } from '../../api'
import { DegreeBadge, InfluenceBadge } from '../Badges'
import { jsStyles } from './PersonCard.styles'
import styles from './PersonCard.module.scss'

export interface IPersonCardProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	person: IPerson
}
export const PersonCard: React.FC<IPersonCardProps> = memo(({ person }) => {
	const { function: func, organization, region, pageRank } = person

	const [checked, setChecked] = useState<boolean>(false)

	// TODO: Temporary random degree till calculated by API
	const degree = useMemo(() => {
		return Math.floor(Math.random() * 6) + 1
	}, [])

	return (
		<div className={styles.personCardRoot}>
			{/* <div className={styles.personCardCnt}> */}
			<div className={styles.personCardMain}>
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
						onChange={() => setChecked(!checked)}
						styles={jsStyles.customCheckbox}
					/>
				</div>
			</div>
			{/* </div> */}
		</div>
	)
})
