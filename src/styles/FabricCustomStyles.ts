import { IButtonStyles } from 'office-ui-fabric-react'
import { ColorPalette } from './ColorPalette'

export interface IFabricCustomStyles {
	smallButton: IButtonStyles
	smallAltButton: IButtonStyles
	altButton: IButtonStyles
}

export const FabricCustomStyles: IFabricCustomStyles = {
	smallButton: {
		root: {
			height: '24px',
		},
	},
	smallAltButton: {
		root: {
			height: '24px',
			backgroundColor: ColorPalette.brandPrimaryAlt,
		},
		rootHovered: {
			backgroundColor: ColorPalette.brandSecondaryAlt,
		},

		rootPressed: {
			backgroundColor: ColorPalette.brandTertiaryAlt,
		},
	},
	altButton: {
		root: {
			backgroundColor: ColorPalette.brandPrimaryAlt,
		},
		rootHovered: {
			backgroundColor: ColorPalette.brandSecondaryAlt,
		},
		rootPressed: {
			backgroundColor: ColorPalette.brandTertiaryAlt,
		},
	},
}
