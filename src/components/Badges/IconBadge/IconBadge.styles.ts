export const jsStyles = (color: string, isSmall: boolean) => {
	return {
		iconCnt: {
			display: 'flex',
			justifyContent: 'center',
		},
		txtCnt: {
			color: color,
			fontSize: isSmall ? '10px' : '14px',
			fontWeight: 600,
			lineHeight: '12px',
		},
	}
}
