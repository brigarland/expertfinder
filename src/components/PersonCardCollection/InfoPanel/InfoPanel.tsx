import React, { memo } from 'react'
import { IPerson } from '../../../api'
import { TagItem, ITagItemStyles } from 'office-ui-fabric-react'
import styles from './InfoPanel.module.scss'

export interface IInfoPanelProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	person: IPerson
	/**
	 * Is the panel hidden
	 */
	hidden?: boolean
}

export interface TagAttributeProps {
	name: string
	value: string[]
}

export const InfoPanel: React.FC<IInfoPanelProps> = memo(
	({ person, hidden = true }) => {
		const { projects, skills } = person

		return (
			<div
				className={styles.infoPanelRoot}
				style={{
					display: hidden ? 'none' : 'block',
					height: hidden ? 0 : 'auto',
				}}
			>
				<TagAttribute name="Projects" value={projects} />
				<TagAttribute name="Skills" value={skills} />
			</div>
		)
	},
)

export const TagAttribute: React.FC<TagAttributeProps> = memo(
	({ name, value }) => (
		<div className={styles.attributeContainer}>
			<div className={styles.attributeName}>{name}</div>
			<div className={styles.attributeValue}>
				{value.map((v, index) => (
					<TagItem
						styles={tagStyle}
						key={v}
						index={index}
						item={itemForValue(v)}
					>
						{v}
					</TagItem>
				))}
			</div>
		</div>
	),
)

const tagStyle: ITagItemStyles = {
	close: {
		display: 'none',
	},
	root: {
		display: 'inline',
	},
	text: {},
}

const itemForValue = (input: string) => ({ key: input, name: input })
