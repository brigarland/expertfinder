import React, { memo, useState } from 'react'
import { Checkbox } from 'office-ui-fabric-react'
import { IPerson } from '../../api'
import { jsStyles } from './PersonCard.styles'
import styles from './PersonCard.module.scss'

export interface IPersonCardProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	person: IPerson
}
export const PersonCard: React.FC<IPersonCardProps> = memo(({ person }) => {
	const { function: func, organization, region } = person

	const [checked, setChecked] = useState<boolean>(false)

	return (
		<div className={styles.personCardRoot}>
			{/* <div className={styles.personCardCnt}> */}
			<div className={styles.personCardMain}>
				<div className={styles.title}>
					{func} in {organization}, {region} Region
				</div>
			</div>
			<div className={styles.personCardFooter}>
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
