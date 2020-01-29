export const jsStyles = (color: string, isSmall: boolean) => {
	return {
		iconCnt: {
			display: 'flex',
			justifyContent: 'center',
		},
		txtCnt: {
			color: color,
			fontSize: isSmall ? '10px' : '18px',
			fontWeight: 600,
			lineHeight: isSmall ? '12px' : '26px',
		},
	}
}
