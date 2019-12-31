import { IButtonStyles } from 'office-ui-fabric-react'

export interface IFabricCustomStyles {
	smallButton: IButtonStyles
}

export const FabricCustomStyles: IFabricCustomStyles = {
	smallButton: {
		root: {
			height: '24px',
		},
	},
}
