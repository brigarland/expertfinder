import React from 'react'
import { useUserProjects } from '../../../../../hooks'
import { Project } from '.'
import { TextField, PrimaryButton } from 'office-ui-fabric-react'
import styles from '../CertsProjectBlocks.module.scss'

export const ProjectsBlock: React.FC = () => {
	const userProjects = useUserProjects()
	return (
		<div className={styles.projectsBlockRoot}>
			<div className={styles.projectsCnt}>
				{userProjects.map((f, i) => (
					<Project key={i} project={f} />
				))}
			</div>
			<div className={styles.formCnt}>
				<h4 className={styles.formHeader}>Add a Project</h4>
				<div className={styles.fieldsCnt}>
					<div className={styles.titleCnt}>
						<TextField label="Title" />
					</div>
					<div className={styles.issuerCnt}>
						<TextField label="Start Date" />
					</div>
					<div className={styles.dateCnt}>
						<TextField label="End Date" />
					</div>
					<div className={styles.btnCnt}>
						<PrimaryButton text="Add Project" />
					</div>
				</div>
			</div>
		</div>
	)
}
