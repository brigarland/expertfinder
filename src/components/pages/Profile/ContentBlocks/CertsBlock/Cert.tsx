import React from 'react'
import { ICert } from '../../../../../api'
import moment from 'moment'
import { Icon } from 'office-ui-fabric-react'
import { ColorPalette } from '../../../../../styles'
import styles from '../CertsProjectBlocks.module.scss'

export interface ICertProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Certification object from API
	 */
	cert: ICert
}

export const Cert: React.FC<ICertProps> = ({ cert }) => {
	const iconTypeValues = {
		Certification: {
			color: ColorPalette.orangeShade10,
			iconName: 'Certificate',
		},
		Accolade: {
			color: ColorPalette.blueShade10,
			iconName: 'Medal',
		},
		Award: {
			color: ColorPalette.brand04,
			iconName: 'Ribbon',
		},
	}

	return (
		<div className={styles.certRoot}>
			<div className={styles.iconCnt}>
				<div
					className={styles.iconBg}
					style={{ backgroundColor: iconTypeValues[cert.type].color }}
				>
					<Icon iconName={iconTypeValues[cert.type].iconName} />
				</div>
			</div>
			<div className={styles.infoCnt}>
				<div className={styles.title}>{cert.title}</div>
				<div className={styles.issuer}>{cert.issuer}</div>
				<div className={styles.date}>
					Issued {moment(cert.issueDate.toString()).format('MMMM YYYY')}
				</div>
			</div>
		</div>
	)
}
