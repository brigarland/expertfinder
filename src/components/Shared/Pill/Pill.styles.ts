export const jsStyles = (isSolid: boolean, fill: string) => {
	const pillLeftPadding = fill === 'CheckMark' ? 10 : 7

	return {
		pillRoot: {
			// flex: isExpanded ? "0 1 280px" : "0 1 50px",
			display: 'inline-block',
		},
		pill: {
			display: 'flex',
			border: isSolid ? 0 : '2px solid #6264a7',
			backgroundColor: isSolid ? '#6264a7' : 'transparent',
			padding: `6px 18px 5px ${pillLeftPadding}px`,
			margin: '5px',
			fontSize: '14px',
			lineHeight: '16px',
			borderRadius: '16px',
			color: isSolid ? '#fff' : '#6264a7',
			cursor: 'pointer',
		},
		iconCnt: {
			flex: 0,
			marginRight: '10px',
			fontSize: '18px',
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
