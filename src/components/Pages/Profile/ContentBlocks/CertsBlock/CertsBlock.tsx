import React from 'react'
import { useUserCerts } from '../../../../../hooks'
import { Cert } from '.'
import { TextField, PrimaryButton } from 'office-ui-fabric-react'
import styles from '../CertsProjectBlocks.module.scss'

export const CertsBlock: React.FC = () => {
	const userCerts = useUserCerts()
	return (
		<div className={styles.certsBlockRoot}>
			<div className={styles.certsCnt}>
				{userCerts.map((f, i) => (
					<Cert key={i} cert={f} />
				))}
			</div>
			<div className={styles.formCnt}>
				<h4 className={styles.formHeader}>Add a Certification</h4>
				<div className={styles.fieldsCnt}>
					<div className={styles.titleCnt}>
						<TextField label="Title" />
					</div>
					<div className={styles.issuerCnt}>
						<TextField label="Issuer" />
					</div>
					<div className={styles.dateCnt}>
						<TextField label="Date Issued" />
					</div>
					<div className={styles.btnCnt}>
						<PrimaryButton text="Add Certification" />
					</div>
				</div>
			</div>
		</div>
	)
}
