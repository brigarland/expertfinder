import React from 'react'
import { ColorPalette } from '../../../styles'
import styles from './SectionHeader.module.scss'

export interface ISectionHeaderProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Text for Header
	 */
	text: string
	/**
	 * Text size in pixels
	 */
	fontSize?: number | string
	/**
	 * Length of the underline decoration in pixels
	 */
	lineLength?: number | string
	/**
	 * Length of the underline decoration in pixels
	 */
	lineColor?: string
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({
	text,
	fontSize = 32,
	lineLength = 0,
	lineColor = ColorPalette.gray02,
}) => {
	const decorationStyles: React.CSSProperties = {
		width: lineLength,
		borderColor: lineColor,
	}
	return (
		<div className={styles.headerRoot}>
			<h1 className={styles.headerTag} style={{ fontSize: fontSize }}>
				{text}
			</h1>
			{lineLength !== 0 && (
				<div className={styles.headerDecoration} style={decorationStyles} />
			)}
		</div>
	)
}
