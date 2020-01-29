import React, { memo } from 'react'
import { IconButton } from 'office-ui-fabric-react'
// import styles from './Pill.module.scss'
import { jsStyles } from './Pill.styles'

export enum PillType {
	Default = 'Default',
	Add = 'Add',
	Suggestion = 'Suggestion',
}
export enum PillFill {
	Solid = 'Solid',
	Border = 'Border',
}

export interface IPillProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * The main text string value
	 */
	text: string
	/**
	 * Type of pill: add | remove | done (use PillIcon)
	 */
	type?: PillType
	/**
	 * Color fill of pill: solid | border | done (use PillFill)
	 */
	fill?: PillFill
	/**
	 * Custom color of pill
	 */
	color?: string
	/**
	 * onClick Event for Delete
	 */
	onDelete?: (value: string) => void
	/**
	 * onClick Event for Add
	 */
	onAdd?: (value: string) => void
}
export const Pill: React.FC<IPillProps> = memo(
	({
		text,
		type = PillType.Default,
		fill,
		color,
		onDelete = () => {},
		onAdd = () => {},
	}) => {
		const typeValues = {
			Add: {
				fill: PillFill.Border,
				iconName: 'AddTo',
				hasDelete: false,
			},
			Suggestion: {
				fill: PillFill.Border,
				iconName: 'AddTo',
				hasDelete: true,
			},
			Default: {
				fill: fill || PillFill.Solid,
				iconName: undefined,
				hasDelete: false,
			},
		}
		const isSolid = !!(typeValues[type].fill === PillFill.Solid)
		const styles = jsStyles(isSolid, color, type)

		return (
			<div style={styles.pillRoot}>
				<div style={styles.pill}>
					{typeValues[type].iconName && (
						<div style={styles.iconCnt}>
							<IconButton
								iconProps={{
									iconName: typeValues[type].iconName,
									style: styles.icon,
								}}
								styles={{
									root: {
										height: 18,
										width: 18,
									},
								}}
								onClick={ev => onAdd(text)}
							/>
						</div>
					)}
					<div style={styles.textCnt}>{text}</div>
					{typeValues[type].hasDelete && (
						<div style={styles.deleteBtnCnt}>
							<IconButton
								iconProps={{
									iconName: 'Cancel',
									style: styles.icon,
									styles: {
										root: {
											fontSize: 14,
											lineHeight: 17,
										},
									},
								}}
								styles={{
									root: {
										height: 18,
										width: 18,
									},
								}}
								onClick={ev => onDelete(text)}
							/>
						</div>
					)}
				</div>
			</div>
		)
	},
)
