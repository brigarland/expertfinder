import { ColorPalette } from '../../../styles'
import { PillType } from '.'

export const jsStyles = (
	isSolid: boolean,
	color = '#6264a7',
	type: PillType,
) => {
	// const pillLeftPadding = fill === 'CheckMark' ? 10 : 7
	const pillPadding = {
		Default: '6px 16px 7px 16px',
		Add: '5px 16px 4px 5px',
		Suggestion: '5px 10px 4px 5px',
	}

	return {
		pillRoot: {
			// flex: isExpanded ? "0 1 280px" : "0 1 50px",
			display: 'inline-block',
		},
		pill: {
			display: 'flex',
			border: isSolid ? 0 : `2px solid ${color}`,
			backgroundColor: isSolid ? color : 'transparent',
			padding: pillPadding[type],
			margin: '5px',
			fontSize: '14px',
			lineHeight: '16px',
			borderRadius: '16px',
			color: isSolid ? ColorPalette.white : color,
			cursor: 'pointer',
		},
		iconCnt: {
			flex: 0,
			marginRight: '10px',
			fontSize: '18px',
		},
		deleteBtnCnt: {
			flex: 0,
			marginLeft: '12px',
			paddingLeft: '6px',
			fontSize: '14px',
			borderLeft: `1px solid ${ColorPalette.gray04}`,
		},
		icon: {
			fontWeight: isSolid ? 400 : 600,
		},
		textCnt: {
			flex: 1,
			fontWeight: 600,
		},
	}
}
