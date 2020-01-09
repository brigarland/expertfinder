import React from 'react'
import {
	PrimaryButton as FabricPrimaryButton,
	IButtonProps,
} from 'office-ui-fabric-react'
import { FabricCustomStyles } from '../../../styles/FabricCustomStyles'

export interface IPrimaryButtonProps extends IButtonProps {
	/**
	 * Smaller version of button
	 */
	isSmall?: boolean
	/**
	 * Alternate Color
	 */
	isAlt?: boolean
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = props => {
	const { isSmall, isAlt } = props
	// filter out added props for button
	const filteredProps: any = { ...props }
	filteredProps.isSmall && delete filteredProps.isSmall
	filteredProps.isAlt && delete filteredProps.isAlt
	// build styles
	let styles = {}
	if (isSmall && isAlt) {
		styles = FabricCustomStyles.smallAltButton
	} else if (isSmall) {
		styles = FabricCustomStyles.smallButton
	} else if (isAlt) {
		styles = FabricCustomStyles.altButton
	}
	return <FabricPrimaryButton styles={styles} {...filteredProps} />
}
