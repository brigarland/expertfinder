import { ILabelStyles } from 'office-ui-fabric-react'

export interface ITeamsUIStyles {
	oufrLabel: ILabelStyles
}

export const TeamsUIStyles: ITeamsUIStyles = {
	oufrLabel: {
		root: {
			border: 0,
			boxSizing: 'border-box',
			color: '#4E586A', // TODO: Find in color library
			display: 'inline-block',
			float: 'left',
			fontSize: '0.75rem',
			fontWeight: 400,
			lineHeight: '1rem',
			margin: '0 0 8px 0',
			padding: 0,
			width: '100%',
		},
	},
}
